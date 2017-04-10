import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ForumLoginComponent } from './forum-login.component';
//no idea how to route things but I want there to be a login before we can use the app
//pretty sure Im not accomplishing this here but we'll see

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items:FirebaseListObservable <any[]>;
  constructor( af: AngularFire ){//I have no idea what this syntax is
	this.items = af.database.list('/Curtis');
  }
}
