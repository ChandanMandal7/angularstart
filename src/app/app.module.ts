import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { customersModule } from './customers/cutomers.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule,AppRoutingModule, customersModule,SharedModule ],
  declarations: [ AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
