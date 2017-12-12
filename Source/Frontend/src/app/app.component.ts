import { Auth } from './autentication/Auth';
import { Component, ViewEncapsulation } from '@angular/core';
import { query, trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl'],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('routerAnimation', [
			transition('* <=> *', [
				// Initial state of new route
				query(':enter',
					style({
						position: 'fixed',
						top: 0,
						width: '100%',
						height: '100%',
						transform: 'translateX(100%)',
						backgroundColor: '#f6f6f6',
						zIndex: 1000
					}),
					{optional: true}),

					query(':leave',
						animate('0.6s 0.2s ease-out',
							style({
								transform: 'translateX(-100%)'
							})
						),
					{optional: true}),

					query(':enter',
						animate('0.6s 0.2s ease-out',
							style({
								transform: 'translateX(0%)'
							})
						),
					{optional: true}),
			])
		])
	]
})

export class AppComponent {

	constructor () {

	}

	getRouteAnimation(outlet) {
		return outlet.activatedRouteData.animation;
	}
}
