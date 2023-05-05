export class Accessory{
    idAccessory!:number;
    name!:string;
    price!:number;
    description!:string;
    image!:File;
    static readonly BAD_WORDS = ['badword', 'sobadword', 'verybadword'];

}
