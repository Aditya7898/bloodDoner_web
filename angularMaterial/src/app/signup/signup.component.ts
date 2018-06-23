import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // tslint:disable-next-line:whitespace
  // bloodGroups: any[] = [1, 2, 3, 4, 5, 6];

  bloodGroups = [
    { value: 'A+' },
    { value: 'A-' },
    { value: 'B+' },
    { value: 'B-' },
    { value: 'O+' },
    { value: 'O-' },
    { value: 'AB+'},
    { value: 'AB-'}
  ];

  cities = [
    { value: 'Bhopal' },
    { value: 'Indore' },
    { value: 'Jabalpur' }
  ];

// variable
show: boolean;
signupForm: FormGroup;


constructor(private authService: UserDataService) {
  this.show = false;
 }

// click event function toggle
password() {
    this.show = !this.show;
    console.log('hello');
}

  ngOnInit() {
    this.signupForm = new FormGroup({
        'fullName': new FormControl( null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'contact': new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(10)]),
        'city': new FormControl(null, Validators.required),
        'bloodGroup': new FormControl(null, Validators.required),
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit() {
    this.authService.signup(this.signupForm);
  }


  resetForm() {
    this.reset();
  }

  reset() {
    this.signupForm.reset();
  }

}
