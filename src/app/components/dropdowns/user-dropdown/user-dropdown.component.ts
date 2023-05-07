import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { Router } from '@angular/router';
import { UserapiService } from '../../../views/admin/users/_service/userapi.service';
import{ AuthService } from '../../../views/auth/_services/auth.service';
import{ StorageService } from '../../../views/auth/_services/storage.service';

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
  constructor(
    private userAuthService: AuthService, 
    private router: Router,
    public userService: UserapiService,
    public storageService: StorageService
  ) { }

  name = this.storageService.getUser().username;
  ngOnInit(): void {
  }

  public isLoggedIn() {
    console.log(this.name);
    return this.storageService.isLoggedIn();
  }

  public logout() {
    this.storageService.clean();
    this.router.navigate(['/']);
  }
}
