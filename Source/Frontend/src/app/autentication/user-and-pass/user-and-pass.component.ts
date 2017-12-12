import { Account } from './../models/account';
import { Auth } from './../Auth';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticationEventType } from '../autentication.event.type';
import { AppEventDispatcher } from '../../utils/AppEventDispatcher';
import { TweenMax, Quint } from 'gsap';
import { AutenticationService } from '../autentication.service';
import { EventTypes } from '../../shared/EventTypes';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-and-pass',
	templateUrl: './user-and-pass.component.html',
	styleUrls: ['./user-and-pass.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class UserAndPassComponent implements OnInit {

	accounts: Array<Account>;
	formLogin: FormGroup;
	cpf: string;
	canSend = false;
	passwordError = false;
	sending = false;
	hasLogedOnce = false;
	active = false;

	constructor(private router:Router, private authService: AutenticationService, private formBuilder: FormBuilder) {
		this.formLogin = formBuilder.group({
			'cpf': [null, Validators.required],
			'pass': [null, Validators.required]
		});

		AppEventDispatcher.listen( AutenticationEventType.LOGIN.USER_AND_PASS, (data) => {
			this.show(data);
		});
	}

	verifyPassword(password) {

		if ( password.length > 4 ) {
			this.canSend = true;
		} else {
			this.canSend = false;
		}

	}

	send() {

		if ( !this.sending && this.formLogin.valid && this.canSend ) {

			this.formLogin.disable();

			this.sending = true;

			this.authService.loadAccounts(this.formLogin.value.cpf, this.formLogin.value.pass, (data) => {

				this.sending = false;

				if (data.Sucesso) {

					if (Auth.getInstance().getAccountsList().length > 1) {
						this.hide();
						AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.ACCOUNTS_LIST, {delay: .2});
					} else if (Auth.getInstance().getAccountsList().length > 0) {

						// Configura a única conta e usuário que existe e efetua o login
						Auth.getInstance().setUser(Auth.getInstance().getAccountsList()[0].user);

						this.router.navigate(['']);
					}

				} else {
					this.formLogin.enable();
					AppEventDispatcher.dispatch(EventTypes.MESSAGE.SNACK, { component: this, msg: data.Mensagem });
				}

			});

		}

	}

	ngOnInit() {
	}

	show(data) {

		this.active = true;

		if (this.hasLogedOnce) {
			this.accounts = Auth.getInstance().getAccountsList();
			this.cpf = Auth.getInstance().getUser().cpfCnpj;
			this.formLogin.controls.cpf.setValue(this.cpf);
		} else if (Auth.firstCPF !== '') {
			this.formLogin.controls.cpf.setValue(Auth.firstCPF);
		}

		TweenMax.delayedCall(.1, () => {
			TweenMax.to('[data-component="user-and-pass"]', .8, {delay: data.delay, left: '50%', ease: Quint.easeOut});
		});
	}

	hide() {
		TweenMax.to('[data-component="user-and-pass"]', 1.6, {left: '-100%', ease: Quint.easeOut, onComplete: () => {
			this.active = false;
		}});
	}

}
