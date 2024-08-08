import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextBoxComponenet } from './customers-list/filterTextBox';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers.routing';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponenet ],
  exports: [ CustomersComponent ]
})
export class customersModule { }