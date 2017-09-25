import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBMgIR0H4UFW772MNnd5vndZb4GMnqkOWQ",
  authDomain: "angular4simpleapp.firebaseapp.com",
  databaseURL: "https://angular4simpleapp.firebaseio.com",
  projectId: "angular4simpleapp",
  storageBucket: "angular4simpleapp.appspot.com",
  messagingSenderId: "23751284563"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
