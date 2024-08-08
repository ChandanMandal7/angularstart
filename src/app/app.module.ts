import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { customersModule } from './customers/cutomers.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.model';



@NgModule({
  imports: [BrowserModule,AppRoutingModule, customersModule,SharedModule,CoreModule ],
  declarations: [ AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
