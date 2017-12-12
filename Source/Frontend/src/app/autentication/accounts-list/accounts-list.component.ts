import { Auth } from './../Auth';
import { Account } from './../models/account';
import { AutenticationEventType } from './../autentication.event.type';
import { AppEventDispatcher } from './../../utils/AppEventDispatcher';
import { TweenMax, Quint, Sine } from 'gsap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-accounts-list',
	templateUrl: './accounts-list.component.html',
	styleUrls: ['./accounts-list.component.styl'],
	encapsulation: ViewEncapsulation.None
})
export class AccountsListComponent implements OnInit {

	selectedAccount: string;
	scrollbarOptions: { axis: 'y', theme: 'minimal-dark' };
	accountsList: Array<Account>;
	active = false;

	constructor(private router: Router) {
		AppEventDispatcher.listen(AutenticationEventType.LOGIN.ACCOUNTS_LIST, (data) => {
			this.show(data);
		});
	}

	ngOnInit() {
	}

	selectAccount(account) {
		this.selectedAccount = account;

		const findedAccount: Array<Account> = Auth.getInstance().getAccountsList().filter(this.accountCompare, this.selectedAccount);

		Auth.getInstance().setUser(findedAccount[0].user);
	}

	accountCompare(item, index, array) {
		return (item.user.accountNumber === this);
	}

	checkKey(account, event) {
		if (event.keyCode === 13) {
			this.selectedAccount = account;
		}
	}

	send() {
		this.router.navigate(['']);
	}

	show(data: any) {

		this.active = true;
		this.accountsList = Auth.getInstance().getAccountsList();

		TweenMax.delayedCall(.1, () => {
			TweenMax.to('[data-component="login"] .logo', .8, { top: 25, ease: Sine.easeOut});
			TweenMax.to('[data-component="accounts-list"]', .8, { delay: data.delay, left: '50%', ease: Quint.easeOut });
		});
	}

}
