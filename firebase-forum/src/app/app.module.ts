import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//import { AuthGuardService } from './auth-gaurd.service';
import { AppComponent } from './app.component';
import { ForumLoginComponent } from './forum-login.component';
import { MessagesComponent } from './messages/messages.component';

export const firebaseConfig = {
	apiKey: "AIzaSyDM8TQgMOKblnyKfjqPArpFWJWtINaeweQ",
    authDomain: "fir-forum.firebaseapp.com",
    databaseURL: "https://fir-forum.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "738469563138"
  };

const appRoutes: Routes = [
	{path:'', redirectTo: 'forum-login', pathMatch:'full' },
	{path: 'forum-login', component: ForumLoginComponent},
	{path: 'user-posts', component: MessagesComponent}

];

  const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  };// User credtentials


@NgModule({
  declarations: [ ForumLoginComponent , AppComponent, MessagesComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ForumLoginComponent]
})
export class AppModule { }
