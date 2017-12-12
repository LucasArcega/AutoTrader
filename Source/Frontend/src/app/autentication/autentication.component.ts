import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TweenMax, Quint } from 'gsap';
import { AppEventDispatcher } from '../utils/AppEventDispatcher';
import { AutenticationEventType } from './autentication.event.type';

@Component({
	selector: 'app-autentication',
	templateUrl: './autentication.component.html',
	styleUrls: ['./autentication.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class AutenticationComponent implements OnInit {

	slideConfig = { 'slidesToShow' : 1, arrows: false, dots: true };

	constructor() { }

	ngOnInit() {

		TweenMax.to('[data-component="autentication"] .container-abs', 1, {delay: 1, top: '50%', ease: Quint.easeOut, onComplete: () => {
			TweenMax.set('[data-component="autentication"]', { overflowY: 'auto' } );
				AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.MY_CPF, {delay: 0});
				// AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.DEFINE_PASSWORD, null);
				// AppEventDispatcher.dispatch(AutenticationEventType.LOGIN.ACCOUNTS_LIST, {delay: 0});
		}});

	}

}
