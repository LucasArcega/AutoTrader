import { AppEventDispatcher } from './../../utils/AppEventDispatcher';
import { EventTypes } from './../EventTypes';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TweenMax, Power2, Quint } from 'gsap';

@Component({
	selector: 'app-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {

	constructor() {
		AppEventDispatcher.listen( EventTypes.MENU.TOGGLE, (data) => {
			if (data.open) {
				TweenMax.to('[data-component="main-menu"]', .7, {
					right: '0',
					ease: Power2.easeOut
				});
			} else {
				TweenMax.to('[data-component="main-menu"]', .7, {
					right: '-100%',
					ease: Power2.easeOut
				});
			}
		});
	}

	animationIn(e) {
		const animation = e.srcElement.querySelectorAll('.list-menu .animationLayer');
		const	animationSubmenu = e.srcElement.querySelectorAll('.list-submenu .animationLayer');

		TweenMax.to(animation, .7, {
			width: '100%',
			ease: Power2.easeOut
		});

		TweenMax.to(animationSubmenu, .5, {
			width: '100%',
			height: '100%',
			ease: Power2.easeOut
		});
	}

	animationOut(e) {
		const animation = e.srcElement.querySelectorAll('.list-menu .animationLayer');
		const	animationSubmenu = e.srcElement.querySelectorAll('.list-submenu .animationLayer');

		TweenMax.to(animation, .7, {
			width: 0,
			ease: Power2.easeOut
		});

		TweenMax.to(animationSubmenu, .5, {
			width: 0,
			height: 0,
			ease: Power2.easeOut
		});
	}

	itemOpen(e) {
		const itemMenu = e.currentTarget;
		const submenu = e.currentTarget.nextElementSibling;

		if (submenu.classList.contains('active')) {
			TweenMax.to(submenu, .7, {
				height: 0,
				ease: Quint.easeOut
			});

			TweenMax.to(itemMenu.querySelectorAll('.item-arrow'), .3, {
				rotation: 0,
				ease: Quint.easeOut
			});

			submenu.classList.remove('active');

		} else {
			TweenMax.set(submenu, {
				height: 'auto',
			});

			TweenMax.from(submenu, .7, {
				height: 0,
				ease: Quint.easeOut
			});

			TweenMax.to(itemMenu.querySelectorAll('.item-arrow'), .3, {
				rotation: 90,
				ease: Quint.easeOut
			});

			submenu.classList.add('active');
		}


	}

	ngOnInit() {

	}


}
