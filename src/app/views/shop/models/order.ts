import {User} from "./user";
import {Cart} from "./cart";
export class Order{
    idItem!: number;
    date!: Date;
    deliveryPrice!: number;
    orderstatus!: string;
    totalItem!: number;
    cart!: Cart;
    user!: User;
  
  
  }