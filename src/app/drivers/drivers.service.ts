import { Injectable } from '@angular/core';
import { Driver } from './shared/driver.model';
@Injectable()
export class DriversService {
	public drivers: Driver[]
	constructor() {
		this.drivers = [
			{
				id: 1,
				name: 'Rangel',
				email: 'email@email.com',
				phone: '713-437-7259',
				jobs: [
					{
						id: 1,
						customerName: '167557 Rae Dolan',
						jobType: 'MOVEIT',
						dispatchDate: '2018-04-05',
						time: 'PM',
						status: 'blocked',
						notes: 'Move out (4 containers) Call vefore arrival date/cust will back if date needs to change',
						from: {
							title: '6853 Southwest Fwy Houston TX 77074',
							showed: false
						},
						to: {
							title: '6007 Franz Rd Katy TX 77493',
							showed: false
						},
						confirmed: 'YES',
						stop1: {
							title: '6007 Franz RD',
							showed: false
						}
					}, {
						id: 2,
						customerName: 'customerName',
						jobType: 'MOVEIT',
						dispatchDate: '2018-04-05',
						time: 'PM',
						status: 'blocked',
						notes: 'house to our storage whould probably need 3 containers enoigh safety packs- Nothing over 300LBS 3200 SQ FT Send vet crews',
						from: {
							title: '13615 Indigo Spires Dr Cypress TX 77429',
							showed: false
						},
						to: {
							title: '6853 Southwest Fwy Houston TX 77074',
							showed: false
						},
						confirmed: 'YES',
					}
				]
			},
			{
				id: 2,
				name: 'Saidana, Jose',
				email: '123',
				phone: '12312312',
				jobs: [
					{
						id: 3,
						customerName: '7176 Daniel Juarez',
						jobType: 'Move',
						dispatchDate: '2018-04-05',
						time: 'AM',
						status: 'blocked',
						notes: '10 am start to take kids to school 4 locations',
						from: {
							title: 'Southwest Fwy Houston TX 77074 Inited States',
							showed: false
						},
						to: {
							title: 'Southwest Fwy Houston TX 77074 Inited States',
							showed: false
						},
						confirmed: 'YES',
						stop1: {
							title: 'Southwest Fwy Houston TX 77074 Inited States',
							showed: false
						}
					}
				]
			},
		]
	}

}