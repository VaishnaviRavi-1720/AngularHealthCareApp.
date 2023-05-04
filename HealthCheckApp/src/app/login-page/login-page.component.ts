import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  // username: string;
  // password: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  debugger;
   ngOnInit() {
     this.loginForm = this.formBuilder.group({
       username: ['', Validators.required],
       password: ['', Validators.required]
     });
   }

   get username() { return this.loginForm.get('username'); }
   get password() { return this.loginForm.get('password'); }

  //username = this.username;


  onSubmit() {
    debugger

    if (this.loginForm.valid && this.username && this.password) {
      debugger;
      // implement your login validation here
      //this.authService.username = this.username;
      //this.loginForm.get('username').toString();
      this.router.navigate(['/menu']);
      }
      else{
        alert('Please enter proper credentials');
      }
    }
  }



  // constructor(private router: Router){
  // }

  // onSubmit()  {
  //   debugger
  //   console.log("On submit1 has been trigerred");
  //   this.router.navigate(['/menu']);

    // if(this.username === "Admin" && this.password === "Admin123"){
    //   debugger
    //   console.log("On submit has been trigerred");
    //   this.router.navigate(['/AddData']);
    //   //this.router.navigateByUrl('master');
    //   this.clear();
    // }
 // }
