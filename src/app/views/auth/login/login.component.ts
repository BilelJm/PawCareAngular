import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService , private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        const user = this.storageService.getUser();
        this.roles = user.roles;

        console.log('User:', user);
        console.log('Roles:', user.roles);
        
        if (this.storageService.getUser().roles.includes('ROLE_ADMIN')){
            // navigate to the desired route
        this.router.navigate(['/admin/users']);
        console.log(this.storageService.getUser().roles);
      }
      else(this.roles.includes('ROLE_CLIENT') || this.roles.includes('ROLE_VETERINARY'))
      {
        // navigate to the desired route
        this.router.navigate(['']);
        console.log(this.storageService.getUser().roles);
      }
  
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("login failed");
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
