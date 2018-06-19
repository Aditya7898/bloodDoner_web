import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Request } from './request.interface';

@Injectable()
export class UserDataService {


  user: any = null;
  user$: Observable<firebase.User>;
  data: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.user$ = afAuth.authState;
        this.user$.subscribe(x => console.log(x));
  }

  signup(signupdata: FormGroup) {
    console.log(signupdata.value.email, signupdata.value.pass);
    firebase.auth().createUserWithEmailAndPassword(signupdata.value.email, signupdata.value.password)
       .then(response => {
         console.log(response);
         if (response) {
          this.user$.subscribe(user => {
            if (user) {
              console.log(user);
              console.log(signupdata);
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


  login(loginData: FormGroup) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(loginData.value.email, loginData.value.password)
         .then(response => {
           console.log(response);
          });
    } catch (error) {
        console.log(error);
    }
    console.log(this.data);
    console.log(loginData.value.email, loginData.value.password);
  }


  request( requestData: FormGroup ) {
    this.user$.subscribe(user => {
      if (user) {
        console.log(user);
        this.db.list('/request').push(requestData);
      }
    });
  }


  getUser() {
    this.user$.subscribe(user => {
      if (user) {
        console.log(user);
        this.user = user;
      }
    });
    return this.user;
  }
}
