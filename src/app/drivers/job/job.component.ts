import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'driver-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss']

})

export class JobComponent {
	@Input() jobs: Object;
	constructor(
	) {	}
}