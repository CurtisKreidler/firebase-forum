import { Component } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./forum-login.component.css'],
  templateUrl: './forum-login.component.html'
})

export class ForumLoginComponent{

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
    })
    this.router.navigate(['./user-posts']);
  }





  // overrideLogin() {
  //   this.af.auth.login({
  //     provider: AuthProviders.Anonymous,
  //     method: AuthMethods.Anonymous,
  //   });
  // }


}
