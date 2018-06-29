import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Request } from './request.interface';
import { Router } from '@angular/router';
@Injectable()
export class UserDataService {

  LoggingUser$: Observable<any>;
  requestList: AngularFireList<any>;
  user: any = null;
  user$: Observable<firebase.User>;
  data: any;



  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,
    private router: Router) {
    this.user$ = afAuth.authState;
    this.user$.subscribe(x => console.log(x));

    this.user$.subscribe(user => {
      if (user) {
        this.LoggingUser$ = this.db.list('users', ref => ref.orderByKey().equalTo(user.uid)).valueChanges();
        this.LoggingUser$.subscribe(response => {
          console.log(response);
          this.user = response;
        });
      }
    });
  }


  signup(signupdata: FormGroup) {
    console.log(signupdata.value.email, signupdata.value.pass);
    firebase.auth().createUserWithEmailAndPassword(signupdata.value.email, signupdata.value.password)
      .then(response => {
        console.log(response);
        if (response) {
          console.log(response);
          this.user$.subscribe(user => {
            if (user) {
              this.router.navigate(['/home']);
              this.save(user, signupdata);
            }
          });
        }
      })
      .catch(error => console.log(error));
  }


  save(user: firebase.User, userData: FormGroup) {
    this.db.object('/users/' + user.uid).update({
      Name: userData.value.fullName,
      BloodGroup: userData.value.bloodGroup,
      Phone: userData.value.contact,
      Email: userData.value.email,
      City: userData.value.city,
    });
  }


  login(email: string, password: string) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(response => {
          console.log(response);
          this.router.navigate(['/home']);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(email, password);
  }


  request(data: FormGroup) {

    this.requestList = this.db.list('requests');
    console.log(this.requestList);
    return  this.requestList.push({
        Pbloodgroup: data.value.Pbloodgroup,
        Pcity: data.value.Pcity,
        Pdoctor: data.value.Pdoctor,
        Address: data.value.Address,
        Cname: data.value.Cname,
        Ccontact: data.value.Ccontact,
        Cemail: data.value.Cemail,
        Pname: data.value.Pname,
        Cdate: data.value.Cdate.toString()
      });



  }



  // console.log(user);
  // console.log(user.uid);
  // console.log(this.LoggingUser);
  getUser() {
    this.user$.subscribe(user => {
      if (user) {
        this.LoggingUser$ = this.db.list('users', ref => ref.orderByKey().equalTo(user.uid)).valueChanges();
        this.LoggingUser$.subscribe(response => {
          console.log(response);
          this.user = response;
        });
      }
    });
    return this.user;
  }


  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
      // .then(response => { return response; console.log(response); })
      // .catch(error => { console.log(error); return (error); });
  }
}
