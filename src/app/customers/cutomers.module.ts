import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextBoxComponenet } from './customers-list/filterTextBox';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CustomersComponent,CustomersListComponent,FilterTextBoxComponenet],
  imports: [CommonModule,SharedModule,FormsModule ],
  exports:[CustomersComponent]
  
  
})
export class customersModule  { }
