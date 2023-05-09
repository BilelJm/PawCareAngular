import { Pet } from "../../apt/back/pet/pet";

export class Adoption {

    idAdoption:number;
    title:string;
    description:string;
    nbLikes:number;
    cDate:Date;
    location:string;
    picture: string;
    email: string;
    pet:Pet;
    IdPet:any;
    comments: CommentAdoption[];

  
    
    

}

export interface CommentAdoption {
  text:string
  cDate:Date
  
    }


