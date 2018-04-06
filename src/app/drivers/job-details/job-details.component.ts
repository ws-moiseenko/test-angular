import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Driver } from 'selenium-webdriver/edge';
import { DriversService } from '../drivers.service';
@Component({
	selector: 'job-details',
	templateUrl: './job-details.component.html',
	styleUrls: ['./job-details.component.scss'],
	providers: [DriversService]
})

export class JobDetailsComponent {
	@Input() driver: Object;
	public currentJob: any;
	public currentDriver: Object;
	constructor(
		private route: ActivatedRoute,
		public driversService: DriversService
	) {
		this.route.params.subscribe( (params) => {
			this.currentDriver = driversService.drivers[params.driver];
			this.currentJob = driversService.drivers[params.driver].jobs[params.id]
		});
	}
	showAdress() {
		this.currentJob.from.showed = true;
		this.currentJob.to.showed = true;
	}


}