import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractComponent } from './extract.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [ExtractComponent],
	exports: [
		ExtractComponent
	]
})
export class ExtractModule { }
