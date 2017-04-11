import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  items:FirebaseListObservable <any[]>;

  constructor( af: AngularFire ){//I have no idea what this syntax is

  this.items = af.database.list('/Curtis');
  }
}
