import { RouterModule } from '@angular/router';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { VirtualKeyboardComponent } from './virtual-keyboard/virtual-keyboard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { MainTitleComponent } from './main-title/main-title.component';

@NgModule({
	imports: [
		CommonModule,
		MatSnackBarModule,
		RouterModule,
		McBreadcrumbsModule.forRoot()
	],
	declarations: [
		MainMenuComponent,
		VirtualKeyboardComponent,
		HeaderComponent,
		NotificationsComponent,
		ProfileComponent,
		BreadcrumbComponent,
		SnackBarComponent,
		MainTitleComponent
	],
	exports: [
		MainMenuComponent,
		VirtualKeyboardComponent,
		HeaderComponent,
		NotificationsComponent,
		ProfileComponent,
		BreadcrumbComponent,
		SnackBarComponent,
		MainTitleComponent,
		McBreadcrumbsModule
	]
})
export class SharedModule { }
