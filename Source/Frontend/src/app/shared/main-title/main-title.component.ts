import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'app-main-title',
	templateUrl: './main-title.component.html',
	styleUrls: ['./main-title.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class MainTitleComponent implements OnInit {

	@Input() title = 'Lorem ipsum title';

	@Input() subtitle = 'Lorem ipsum subtitle';

	constructor() { }

	ngOnInit() {
	}

}
