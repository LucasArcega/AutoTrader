import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutenticationComponent } from './autentication/autentication.component';
import { ExtractComponent } from './master/extract/extract.component';
import { AutenticationGuard } from './autentication/autentication.guard';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './master/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: MasterComponent,
		canActivate: [AutenticationGuard],
		data: {
			breadcrumbs: 'Página Inicial',
			animation: 'dashboard'
		},
		children : [
			{
				path: '',
				pathMatch: 'full',
				component: DashboardComponent
			},
			{
				path: 'extrato',
				data: {
					breadcrumbs: 'Extrato de Conta'
				},
				children : [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'hoje'
					},
					{
						path: 'hoje',
						component: ExtractComponent,
						data: {
							breadcrumbs: 'Hoje'
						}
					}
				]
			}
		]

	},
	{
		path: 'login',
		component: AutenticationComponent,
		data: { animation: 'login' }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {
}
