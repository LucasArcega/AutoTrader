import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppEventDispatcher } from '../../utils/AppEventDispatcher';
import { AutenticationEventType } from '../autentication.event.type';
import { TweenMax, Quint, Sine } from 'gsap';
import { AutenticationService } from '../autentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../Auth';

@Component({
	selector: 'app-my-cpf',
	templateUrl: './my-cpf.component.html',
	styleUrls: ['./my-cpf.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class MyCpfComponent implements OnInit {

	canSend = false;
	sending = false;
	formVerifyCpf: FormGroup;
	accounts = [];
	cpf = '';
	active = false;

	constructor(private authService: AutenticationService, private formBuilder: FormBuilder) {

		this.formVerifyCpf = formBuilder.group({
			'cpf': [null, Validators.required],
			'remember': [null]
		});

		AppEventDispatcher.listen(AutenticationEventType.LOGIN.MY_CPF, () => {

			this.show();

		});

	}

	ngOnInit() {}

	/**
	 * Verifica se o CPF foi preenchido
	 * @param cpf:String
	 */
	verifyCpf(cpf: string) {
		this.cpf = cpf;
		if ( cpf.length > 13 ) {
			this.canSend = true;
		} else {
			this.canSend = false;
		}
	}

	/**
	 * Envia CPF e retorna lista de Contas do usuário, e dados do mesmo.
	 */
	send() {

		if ( !this.sending && this.canSend && this.formVerifyCpf.valid ) {
			this.sending = true;

			Auth.rememberMyUser = this.formVerifyCpf.controls.remember.value;

			this.authService.getUserByCpf(this.formVerifyCpf.value.cpf, (hasPass: boolean) => {

				// TweenMax.delayedCall(2, () => {
					this.sending = false;
					if ( hasPass === true ) {
						this.changeToLoginScene();
					} else {
						this.changeToDefinePassword();
					}
				// });

			});

		}

	}

	changeToLoginScene() {
		this.hide();
		AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.USER_AND_PASS, {delay: .2});
	}

	changeToDefinePassword() {
		this.hide();
		AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.DEFINE_PASSWORD, null);
	}

	show() {
		this.active = true;
		TweenMax.delayedCall(.1, () => {
			TweenMax.to('[data-component="my-cpf"]', .6, {left: '50%', ease: Quint.easeOut});
		});
	}

	hide() {
		TweenMax.to('[data-component="my-cpf"]', 1.6, {left: '-100%', ease: Quint.easeOut, onComplete: () => {
			this.active = false;
		}});
	}

}
