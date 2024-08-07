import { Component,OnInit,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-flexbox',
    // template:'Filter:<input type="text"n[value]="filter" (input)="filter=$event.target.value"/>'
    template:'Filter:<input type="text" [(ngModel)]="filter"/>'
})
export class FilterTextBoxComponenet implements OnInit{

private _filter:string="";

@Input()get filter(){
    return this._filter;
}
set filter(val:string){
    this._filter=val;
    this.changed.emit(this.filter);//reaise change event
}


@Output() changed:EventEmitter<string>=new EventEmitter<string>();
    constructor(){

    }
    ngOnInit(): void {
        
    }
}