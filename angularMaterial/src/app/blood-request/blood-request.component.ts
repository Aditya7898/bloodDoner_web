import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { LimitToOptions } from 'angularfire2/database-deprecated/interfaces';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent implements OnInit {


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
RequestForm: FormGroup;
// request: any;
// requestList: Observable<any[]>;
isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

constructor(private userDataService: UserDataService, private _formBuilder: FormBuilder,
            private db: AngularFireDatabase) {
  this.show = false;
 }
// click event function toggle
password() {
    this.show = !this.show;
    console.log('hello');
}

  ngOnInit() {
    this.RequestForm = new FormGroup({
        'Pname': new FormControl( null, Validators.required),
        'Pbloodgroup': new FormControl(null, [Validators.required]),
        'Pcity': new FormControl(null, [Validators.required]),
        'Pdoctor': new FormControl(null, Validators.required),
        'Address': new FormControl(null, [Validators.required, Validators.minLength(6)]), // hospital address
         //
         'Cname': new FormControl( null, Validators.required),
         'Ccontact': new FormControl(null, [Validators.required]),
         'Cemail': new FormControl(null, [Validators.required, Validators.email]),
         'Cdate': new FormControl(null, Validators.required),
      });

      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
  }
  onSubmit() {
    this.userDataService.request(this.RequestForm).then(res => {
      alert('Request Send Successfully');
      this.RequestForm.reset();
    });
    console.log(this.RequestForm);
  }


}
