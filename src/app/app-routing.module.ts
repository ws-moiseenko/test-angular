import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DriversComponent } from './drivers/drivers.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';
import { JobComponent } from './drivers/job/job.component';
const routes: Routes = [
	{path: '', redirectTo: '/drivers', pathMatch: 'full'},
	{path: 'drivers', loadChildren: 'app/drivers/drivers.module#DriversModule'},
	// {path: ':driver/:id', component: JobDetailsComponent},
	// 	path: ':driver/:id',
	// 	component: JobComponent
	// }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}