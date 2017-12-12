import { Auth } from './../Auth';
import { AutenticationService } from './../autentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { AppEventDispatcher } from '../../utils/AppEventDispatcher';
import { AutenticationEventType } from '../autentication.event.type';
import { TweenMax, Sine, Quint } from 'gsap';


@Component({
	selector: 'app-define-password',
	templateUrl: './define-password.component.html',
	styleUrls: ['./define-password.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class DefinePasswordComponent implements OnInit {

	strengthPass = new RegExp( /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/ );
	formCreatePass: FormGroup;
	passPatternError = false;
	passConfirmError = false;
	passPatternDone = false;
	passConfirmDone = false;
	sending = false;
	active = false;

	constructor(private authService: AutenticationService , private formBuilder: FormBuilder) {

		this.formCreatePass = formBuilder.group({
			'pass': [null, Validators.required],
			'confirmPass': [null, Validators.required],
		});

		AppEventDispatcher.listen( AutenticationEventType.LOGIN.DEFINE_PASSWORD, () => {
			this.show();
		});
	}

	ngOnInit() {
	}

	verifyPassPattern(pass: string, itsBlur: boolean) {

		if (pass.match(this.strengthPass) !== null) {
			this.passPatternDone = true;
			this.passPatternError = false;
		} else {
			this.passPatternDone = false;
		}

		if (itsBlur && !this.passPatternDone) {
			this.passPatternError = true;
			this.passPatternDone = false;
		} else if (itsBlur && this.passPatternDone) {
			this.passPatternError = false;
		}
	}

	verifyConfirmPass(confirmPass: string, itsBlur: boolean) {

		if (this.passPatternDone) {

			if (this.formCreatePass.controls.pass.value === this.formCreatePass.controls.confirmPass.value) {
				this.passConfirmDone = true;
				this.passConfirmError = false;
			} else {
				this.passConfirmDone = false;
			}

			if (itsBlur && !this.passConfirmDone) {
				this.passConfirmError = true;
				this.passConfirmDone = false;
			} else if (itsBlur && this.passConfirmDone) {
				this.passConfirmError = false;
			}

		}

	}

	onSend() {

		if (this.formCreatePass.valid && this.passPatternDone && this.passConfirmDone && !this.sending) {
			this.sending = true;

			this.authService.createPass(this.formCreatePass.controls.pass.value, Auth.firstCPF, () => {

				// TweenMax.delayedCall(2, () => {
					this.hide();
					AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.CREATE_PASS_SUCCESS, {delay: .2});
				// });

			});

		}
	}

	show() {

		this.active = true;

		TweenMax.delayedCall(.1, () => {
			TweenMax.to('[data-component="login"]', .8, { width: '100%', ease: Sine.easeOut});
			TweenMax.to('[data-component="login"] .logo', .8, { scale: .6, top: 25, ease: Sine.easeOut});
			TweenMax.to('[data-component="define-password"]', .8, { delay: .5, left: 0, ease: Quint.easeOut});
		});
	}

	hide() {
		TweenMax.to('[data-component="define-password"]', .8, { left: '-100%', ease: Quint.easeOut, onComplete: () => {
			this.sending = false;
			this.active = false;
		}});
	}

}
