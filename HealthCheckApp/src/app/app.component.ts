import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthCheckApp';

  public form: FormGroup;

   constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    const username = sessionStorage.getItem('username');
    if (username) {
      this.authService.username = username;
    }
  }
  get username(): string {
    if (this.authService.username) {
    return this.authService.username;
    }
    else{
      return "";
    }
  }

}
