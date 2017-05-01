import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { AlarmsComponent } from './alarms/alarms.component';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
    apiKey: 'AIzaSyADN4IoKrdkbymOfaGNvGNwB6aJ1WgYjPs',
    authDomain: 'webalarm-97cec.firebaseapp.com',
    databaseURL: 'https://webalarm-97cec.firebaseio.com',
    projectId: 'webalarm-97cec',
    storageBucket: 'webalarm-97cec.appspot.com',
    messagingSenderId: '514857813906'
  };

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    AlarmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routes
  ],
  providers: [AuthGuard],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
