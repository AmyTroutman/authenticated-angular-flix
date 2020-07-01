import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(private authService: AuthenticationService, private routerService: Router) { }

  ngOnInit() {
  }

  async login()  {
    await this.authService.login(this.username, this.password);

    if (!this.authService.isAuthenticated) {
      console.log('UNable to log in');
    } else {
      this.routerService.navigate(['/main']);
    }
  }
  async signup() {
    await this.authService.signup(this.username, this.password);
  }
}
