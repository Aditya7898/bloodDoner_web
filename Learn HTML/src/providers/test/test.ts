import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TestProvider {

  data: any;

  constructor(public http: Http) {
    console.log('Hello TestProvider Provider');
  }

 load(){
    return this.http.get('assets/JsonData.json').map(res => res.json());
 }

}
