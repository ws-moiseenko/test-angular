import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [

	],
	declarations: [

	],
	providers: [

	]
})

export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
		}
	}
}