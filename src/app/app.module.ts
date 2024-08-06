import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { customersModule } from './customers/cutomers.module';


@NgModule({
  imports: [BrowserModule,AppRoutingModule, customersModule, ],
  declarations: [ AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
