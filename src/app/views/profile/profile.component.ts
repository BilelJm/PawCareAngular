import { Component, OnInit } from "@angular/core";
import { StorageService } from '../../views/auth/_services/storage.service';


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}
