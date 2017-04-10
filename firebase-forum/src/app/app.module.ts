import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
	apiKey: "AIzaSyDM8TQgMOKblnyKfjqPArpFWJWtINaeweQ",
    authDomain: "fir-forum.firebaseapp.com",
    databaseURL: "https://fir-forum.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "738469563138"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



