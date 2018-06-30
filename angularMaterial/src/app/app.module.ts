import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatSelectModule} from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { MatExpansionModule } from '@angular/material/expansion';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './user-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NativeDateAdapter} from '@angular/material';
import { MatNativeDateModule} from '@angular/material';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDividerModule} from '@angular/material/divider';
import { MatStepperModule} from '@angular/material/stepper';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    BloodRequestComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    AllRequestsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    // Angular Material Modules
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule, MatIconModule, MatButtonModule, MatGridListModule,
    LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule,
    FlexLayoutModule, MatCheckboxModule, MatCardModule, MatDatepickerModule,
    MatNativeDateModule, MatTooltipModule, MatExpansionModule, MatDividerModule,
    MatStepperModule, MatSlideToggleModule,
   // firebase configuration
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AngularFireAuthModule,

    // routing module
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'requestBlood', component: BloodRequestComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'requests', component: AllRequestsComponent },
      { path: 'profile', component: ProfileComponent }
    ])
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
