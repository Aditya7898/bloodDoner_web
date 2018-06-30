import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;
  error: any;
  errorMsg: any;
  success: any;


  constructor(private dataService: UserDataService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
    this.loginForm.controls.email.valueChanges.subscribe((res) => {
      if (res) {
        this.error = false;
        this.errorMsg = '';
      }
      console.log(res);
    });
  }

  onSubmit() {
      this.dataService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .then(res => {
        this.success = true;
        console.log(res);
       })
      .catch(error => {
        console.log(error);
        this.errorMsg = 'This email is not registered with us.';
     });
      console.log(typeof(this.loginForm.controls.email.value));
  }

  resetEmail() {
    try {
      this.dataService.resetPassword(this.loginForm.controls.email.value)
         .then(res => {
           this.success = true;
           console.log(res);
          })
         .catch(error => {
           console.log(error);
           this.errorMsg = 'This email is not registered with us.';
        });
    } catch (error) {
         this.error = true;
        console.error();
    }
  }

}

