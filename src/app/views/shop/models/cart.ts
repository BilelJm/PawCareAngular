import {Accessory} from "./accessory";
import {User} from "./user";

export class Cart
{
  idCart: number=1;
  accessories!: Accessory[];
  totalCart:number=0;
}
