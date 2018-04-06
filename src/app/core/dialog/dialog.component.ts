import {
	Component, OnInit, Input, Output, OnChanges, EventEmitter,
	trigger, state, style, animate, transition } from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
	@Input() closable = true;
	@Input() visible: boolean;
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() { }

	close() {
		this.visible = false;
		this.visibleChange.emit(this.visible);
	}
}