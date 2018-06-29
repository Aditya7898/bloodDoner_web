import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {

  requestList: any;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.requestList = this.db.list('requests', ref => ref.limitToLast(20)).valueChanges();
    console.log(this.requestList);
  }

}
