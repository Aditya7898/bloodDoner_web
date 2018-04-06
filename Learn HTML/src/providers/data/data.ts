import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import * as firebase from 'firebase'; 
// import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

  constructor(public http: Http) {
  }


  getData(){
    console.log('Hello DataProvider Provider');        
    return this.http.get('assets/JsonData.json').map(res => res.json());
  }
}
