import { TweenMax, Quint } from 'gsap';
import { AutenticationEventType } from './../autentication.event.type';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AppEventDispatcher } from '../../utils/AppEventDispatcher';

@Component({
	selector: 'app-auth-message',
	templateUrl: './auth-message.component.html',
	styleUrls: ['./auth-message.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class AuthMessageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		AppEventDispatcher.listen(AutenticationEventType.LOGIN.CREATE_PASS_SUCCESS, (data) => {

			TweenMax.to('[data-component="auth-message"]', .8, {delay: data.delay, left: 0, ease: Quint.easeOut});

		});
	}

}
