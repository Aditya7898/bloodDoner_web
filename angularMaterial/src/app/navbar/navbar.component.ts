import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: any;
  user: any[];
  showFiller = false;
  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              public afAuth: AngularFireAuth, public authService: UserDataService) {


              }

  logout() {
       this.afAuth.auth.signOut();
       this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}



  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}
