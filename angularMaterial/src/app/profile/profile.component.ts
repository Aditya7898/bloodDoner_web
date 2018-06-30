import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

  // toggle edit
  color = 'accent';
  checked = false;
  disabled = false;
  //
  user: any[] = null;
  editProfile: any;
  deleteAccount: any;
  editForm: FormGroup;
  constructor(public authService: UserDataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.user = this.authService.getUser();
      console.log(this.user);
      if (this.user != null) {
       console.log(this.user[0].Name);
       this.editForm = new FormGroup({
        'fullName': new FormControl(this.user[0].Name),
        'email': new FormControl(this.user[0].Email),
        'contact': new FormControl(this.user[0].Phone),
        'city': new FormControl(this.user[0].City),
        'bloodGroup': new FormControl(this.user[0].BloodGroup),
         });

      } else {
        this.editForm = new FormGroup({
          'fullName': new FormControl(null),
          'email': new FormControl(null),
          'contact': new FormControl(null),
          'city': new FormControl(null),
          'bloodGroup': new FormControl(null),
      });
      }
    }, 3000);
  }
  onSubmit() {
    console.log(this.editForm);
    this.authService.editProfile(this.editForm);
  }
  edit() {
     this.editProfile = !this.editProfile;
  }
  delete() {
     this.authService.deleteAccount();
  }
}
