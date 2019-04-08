import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { config } from 'rxjs';
import{ AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClient } from 'selenium-webdriver/http';


export const firebaseConfig = {
  apiKey: "AIzaSyCnPQP8EBUxLOrtt9Rd3e0oh1RMKZE0yxc",
  authDomain: "subtracker-a0303.firebaseapp.com",
  databaseURL: "https://subtracker-a0303.firebaseio.com",
  projectId: "subtracker-a0303",
  storageBucket: "subtracker-a0303.appspot.com",
  messagingSenderId: "341711558431"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
