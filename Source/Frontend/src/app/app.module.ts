import { MasterModule } from './master/master.module';
import { SharedModule } from './shared/shared.module';
import { AutenticationModule } from './autentication/autentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		AutenticationModule,
		HttpClientModule,
		MatNativeDateModule,
		BrowserAnimationsModule,
		SharedModule,
		MasterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

/* fix para propriedades do tweenmax poderem ser passadas inlline no tween,
o TS tava solicitando que fosse uma variável.*/
declare module 'gsap' {
	export interface TweenConfig {
		[p: string]: any;
	}
}
