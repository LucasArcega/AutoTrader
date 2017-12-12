import { AppEventDispatcher } from './../../utils/AppEventDispatcher';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { EventTypes } from '../EventTypes';

@Component({
	selector: 'app-snack-bar',
	templateUrl: './snack-bar.component.html',
	styleUrls: ['./snack-bar.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class SnackBarComponent implements OnInit {

	msg: string;

	constructor( public snackBar: MatSnackBar ) {

		AppEventDispatcher.listen(EventTypes.MESSAGE.SNACK, (data) => {

			this.msg = data.msg;
			console.log(this.msg);
			this.openSnackBar();

		});
	}

	ngOnInit() {
	}

	openSnackBar() {

		this.snackBar.open(this.msg, null, {
			duration: 8000,
			verticalPosition: 'top',
			panelClass: 'snack-bar'
		});
	}
}
