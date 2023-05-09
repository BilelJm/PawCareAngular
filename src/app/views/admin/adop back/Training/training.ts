import { Pet } from "../../apt/back/pet/pet";

export class Training {

    idTraining: number;
    title: string;
    description:string;
    duration: number;
    price: number;
    type: Type;
    nbrplaces: number;
    cDate: Date;
    pet:Pet;
    IdPet:any;
    report:ReportTraining[];
    
}

enum Type {
    Cat = "Cat",
    Dog = "Dog"
  }


  export interface ReportTraining {
    idReport:number;
    message:string;
    
    
      }
