import {Component, ViewChild} from '@angular/core';

// import {HeroService} from '../shared/hero.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import { DriversService } from '../drivers.service';
import { Driver } from '../shared/driver.model';
@Component({
	selector: 'app-driver-list',
	templateUrl: './driver-list.component.html',
	styleUrls: ['./driver-list.component.scss'],
	providers: [DriversService]
})

export class DriverListComponent {
	public drivers: Driver[]
	constructor(
		private router: Router,
		public driversService: DriversService
	) {
		this.drivers = driversService.drivers;
	}

}