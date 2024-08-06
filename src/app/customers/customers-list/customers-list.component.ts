import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
 
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: any[] = [];
  customerOrderTotal: number = 0;
  currencyCode: string = 'USD';



  ngOnInit() {


  }

}
