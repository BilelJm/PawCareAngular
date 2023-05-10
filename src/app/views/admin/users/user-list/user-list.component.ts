import { Component, Input, OnInit } from '@angular/core';
import { UserapiService } from '../_service/userapi.service';
import { User } from '../_service/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../_service/role';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  name: string = '';


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  users: User[];



  constructor( private userapiService: UserapiService, private router: Router) { }

  ngOnInit() {

    this.userapiService.getAllUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
  updateUser(id: number){
    this.router.navigate(['/admin/userupdate', id]);
  }
  deleteUser(userId: number): void {
    this.userapiService.deleteUser(userId)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);
      });
  }

  Search() {
    if (this.name == "") {
      console.log(this.name);
      this.ngOnInit();
    } else {
      console.log(this.name);
      this.users = this.users.filter(res => {
        return res.username.toLowerCase().includes(this.name.toLowerCase())
      });
    }
  }

}
