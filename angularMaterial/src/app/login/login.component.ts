import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {};
  email: string;
  password: string;


  constructor(private dataService: UserDataService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
      this.dataService.login(this.email, this.password);
  }

  resetEmail() {
    this.dataService.resetPassword(this.email);
  }

}

