import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DefinePasswordComponent } from './define-password/define-password.component';
import { DefineSubscribeComponent } from './define-subscribe/define-subscribe.component';
import { LostMyPassComponent } from './lost-my-pass/lost-my-pass.component';
import { TokenCodeComponent } from './token-code/token-code.component';
import { AutenticationComponent } from './autentication.component';
import { SlickModule } from 'ngx-slick';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatRadioModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule } from 'ngx-mask';
import { MyCpfComponent } from './my-cpf/my-cpf.component';
import { MatSelectModule, MatProgressSpinnerModule } from '@angular/material';
import { AutenticationService } from './autentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAndPassComponent } from './user-and-pass/user-and-pass.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { AutenticationGuard } from './autentication.guard';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		SlickModule.forRoot(),
		MatCheckboxModule,
		MatButtonModule,
		MatDatepickerModule,
		NgxMaskModule.forRoot(),
		MatProgressSpinnerModule,
		FormsModule,
		ReactiveFormsModule,
		MatSelectModule,
		SharedModule,
		MatListModule,
		MatRadioModule,
		MalihuScrollbarModule.forRoot()
	],
	declarations: [
		LoginComponent,
		DefinePasswordComponent,
		DefineSubscribeComponent,
		LostMyPassComponent,
		TokenCodeComponent,
		AutenticationComponent,
		MyCpfComponent,
		UserAndPassComponent,
		AuthMessageComponent,
		AccountsListComponent
	],
	providers: [
		AutenticationService,
		AutenticationGuard
	]
})
export class AutenticationModule { }
