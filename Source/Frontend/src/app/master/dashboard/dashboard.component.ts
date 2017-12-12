import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Auth } from '../../autentication/Auth';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log('USER:', Auth.getInstance().getUser());
	}

}
