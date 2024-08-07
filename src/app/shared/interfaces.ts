export interface ICustomer{
    id:number;
    name:string;
    city:string;
    orderTotal:number;
    customerSince:any;

}

export interface IOrder{
    customerId:number;
    orderItems:IOrder[];
}


export interface IOrderItem{
    id:number;
    productName:string;
    iteamCost:number;
}