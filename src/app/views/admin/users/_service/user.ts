import { Role } from "./role";

export class User {
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        phone: number;
        enabled: boolean;
        roles:Role[];
        
}
