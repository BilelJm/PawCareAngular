import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiService } from '../_service/userapi.service';
import { User } from '../_service/user';
import { Role } from '../_service/role';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  roles: Role[];
  user: User;
  id!: number;

  constructor(private userapiService: UserapiService,private route: ActivatedRoute,
    private router: Router ) {
      this.user= new User();
     }

    @Input()
    get color(): string {
      return this._color;
    }
    set color(color: string) {
      this._color = color !== "light" && color !== "dark" ? "light" : color;
    }
    private _color = "light";
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.userapiService.getUserById(this.id)
    .subscribe(data=> {this.user = data});

    console.log(this.user);
  }

  onSubmit(){ this.userapiService.updateUserRoles(this.id, this.roles)
    .subscribe(data=>
      {this.user = data;
      
       this.router.navigate(['/admin/users']) } )  }

  

}
