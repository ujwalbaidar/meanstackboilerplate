import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';

import { LayoutModule } from './components/layout/layout.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RoutesModule,
		LayoutModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
