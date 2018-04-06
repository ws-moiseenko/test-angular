import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { JobComponent } from './job/job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { DialogComponent } from '../core/dialog/dialog.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DriversRoutingModule,
	],
	declarations: [
		DriverListComponent,
		DriversComponent,
		DriverComponent,
		JobComponent,
		JobDetailsComponent,
		DialogComponent
	],
	entryComponents: [

	],
	providers: [

	]
})

export class DriversModule {
}