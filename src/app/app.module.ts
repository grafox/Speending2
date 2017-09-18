import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyA5MPp8ntjND8yNW_DVxQ1_drpVd42uvcI",
  authDomain: "grafoxdev.firebaseapp.com",
  databaseURL: "https://grafoxdev.firebaseio.com",
  projectId: "grafoxdev",
  storageBucket: "grafoxdev.appspot.com",
  messagingSenderId: "1018202227947"
};


@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth
  ]
})
export class AppModule { }
