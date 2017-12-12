import { SharedModule } from './../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { ExtractModule } from './extract/extract.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	imports: [
		CommonModule,
		DashboardModule,
		ExtractModule,
		SharedModule,
		AppRoutingModule,
	],
	declarations: [
		MasterComponent
	],
	exports: [MasterComponent]
})
export class MasterModule { }
