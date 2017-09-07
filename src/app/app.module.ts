import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {FIREBASE_CREDENTIALS} from "./firebase.credentials";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {EditShoppingItemPage} from "../pages/edit-shopping-item/edit-shopping-item";
// import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {AddShoppingItemPage} from "../pages/add-shopping-item/add-shopping-item";
import {AngularFireAuthModule} from "angularfire2/auth";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
      AddShoppingItemPage,
      EditShoppingItemPage,
      LoginPage,
      RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      //Initialisation d'angularFire
      AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
      //Import Module angularfire pour interaction avec la Database
      AngularFireDatabaseModule,
      //Initialisation module Authentification Firebase
      AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
      AddShoppingItemPage,
      EditShoppingItemPage,
      LoginPage,
      RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
