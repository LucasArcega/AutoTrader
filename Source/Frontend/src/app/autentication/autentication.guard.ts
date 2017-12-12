import { Auth } from './Auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticationGuard implements CanActivate {
	constructor(private router: Router) {

	}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		const user = Auth.getInstance().getUser();

		// if (user) {
		// 	return true;
		// } else {
		//  	this.router.navigate(['/login']);
		// 	return false;
		// }

		return true;
	}
}
