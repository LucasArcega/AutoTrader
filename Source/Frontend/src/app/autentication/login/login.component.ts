
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TweenMax, Quint, Sine } from 'gsap';
import { AppEventDispatcher } from '../../utils/AppEventDispatcher';
import { AutenticationEventType } from '../autentication.event.type';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {
	}

}
