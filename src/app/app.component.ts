import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: firebase.User;
  
  constructor(
    public afAuth: AngularFireAuth,
  ) {}
  ngOnInit(){
    
  }
}

 