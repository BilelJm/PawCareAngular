import { Pet } from "../pet/pet";
import { User } from "./user";

export class Appointment {
    idAppointment!: number;
    startDate!: String;
    endDate!: String;
    reason!: number;
    location!: number;
    status!: number;
    notes!: String;
    prix!: number;
    pet!:Pet
    doctor!:User;
    
}
