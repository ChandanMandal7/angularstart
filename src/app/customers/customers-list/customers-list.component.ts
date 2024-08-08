import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { SorterService } from 'src/app/core/sorter.service';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',

})
export class CustomersListComponent implements OnInit {

  private _customers: ICustomer[] = [];

  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.CustomerOrder();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customerOrderTotal: number = 0;
  currencyCode: string = 'USD';

  
  constructor(private sorterservice:SorterService){
     
  }


  ngOnInit() {

  }

  CustomerOrder() {
    this.customerOrderTotal = 5;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customerOrderTotal += cust.orderTotal;

    });
  }


  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
      } else {
        this.filteredCustomers = this.customers;
      }
      this.CustomerOrder();
}
  //sorting service
 sort(prop:string){
  this.sorterservice.sort(this.filteredCustomers,prop);
 }

}
