import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DriverListComponent} from './driver-list/driver-list.component';

import {DriversComponent} from './drivers.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const driversRoutes: Routes = [
	{
		path: '',
		component: DriversComponent,
		children: [
			{
				path: '',
				component: DriverListComponent,
				children: [
					{path: ':driver/:id', component: JobDetailsComponent}
				]
			},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(driversRoutes)
	],
	exports: [
		RouterModule
	]
})

export class DriversRoutingModule {
}