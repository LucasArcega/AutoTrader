import { EventTypes } from './../EventTypes';
import { AppEventDispatcher } from './../../utils/AppEventDispatcher';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

	open = true;

	constructor() { }

	openMenu(open) {
		this.open = open;

		if (this.open) {
			AppEventDispatcher.dispatch(EventTypes.MENU.TOGGLE, {open: true});
			this.open = false;
		} else {
			AppEventDispatcher.dispatch(EventTypes.MENU.TOGGLE, {open: false});
			this.open = true;
		}
	}

	ngOnInit() {
	}

}
