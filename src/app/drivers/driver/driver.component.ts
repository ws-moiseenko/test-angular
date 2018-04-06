import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Driver } from 'selenium-webdriver/edge';

@Component({
	selector: 'app-driver',
	templateUrl: './driver.component.html',
	styleUrls: ['./driver.component.scss']
})

export class DriverComponent {
	@Input() driver: Object;
	@Input() key: number;
	constructor(
		private router: Router
	) {

	};

	seeJobDetails (driver, jobId, driverKey, jobKey) {
		// console.log(driverKey, jobKey)
		this.router.navigateByUrl('/drivers/' + driverKey + '/' + jobKey);
	};
}