import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  searchBlood: FormGroup;
  requestList: Observable<any[]>;
  Doners: any[];
  requiredDoners: any[] = [];
  j = 0;

  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver, private db: AngularFireDatabase,
              public afAuth: AngularFireAuth, private authService: UserDataService) {

              }

  logout() {
       this.afAuth.auth.signOut();
  }

   ngOnInit() {
    // this.requestList = this.db.list('requests', ref => ref.limitToLast(5)).valueChanges();
    // console.log(this.requestList);
    this.searchBlood = new FormGroup({
      'Pbloodgroup': new FormControl(null, [Validators.required]),
      'Pcity': new FormControl(null, [Validators.required]),
    });

    this.authService.getUser();
   }

   onSubmit() {
    // tslint:disable-next-line:max-line-length
    this.requestList = this.db.list('users', ref => ref.orderByChild('BloodGroup').equalTo(this.searchBlood.value.Pbloodgroup)).valueChanges();

    this.requestList.subscribe(response => {
    this.Doners = response;
      for ( let i = 0; i < this.Doners.length; i++) {
        if (this.Doners[i].City === this.searchBlood.value.Pcity) {
            this.requiredDoners[this.j] = this.Doners[i];
            console.log(this.requiredDoners[this.j]);
            this.j++;
        }
      }
      this.j = 0;
      console.log(this.requiredDoners.length);
      if (this.requiredDoners.length === 0) {
          console.log('Sorry Data Unavilable');
      }
    });
  }
}


  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}
