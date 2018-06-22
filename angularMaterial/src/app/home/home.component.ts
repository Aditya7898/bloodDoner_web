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
  requestList: Observable<any>;
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


   }

   onSubmit() {
    // this.requestList = this.db.list('requests', ref => ref.child('')).valueChanges();
    // console.log(this.requestList);
     const ref = firebase.database().ref('users');
     const privateTodosRef  =    ref.orderByChild('BloodGroup')
                                 .equalTo(this.searchBlood.value.Pbloodgroup);
     let privateTodos;

     privateTodosRef.on('value', function(response) {
     privateTodos = response.val();
     console.log(privateTodos);

        // const aditya  = ref.orderByChild('Pbloodgroup').equalTo(this.searchBlood.value.Pbloodgroup);
        // console.log(aditya);
    });
  }
}


  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}
