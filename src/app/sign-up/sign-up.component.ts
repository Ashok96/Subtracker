import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User} from '../datamodels/user';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from "angularfire2/database";
import { AppRoutingModule } from '../app-routing.module';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  currUser: User  = new User();
  fullname:string = "";
  userEmail:string= "";
  userPassword:string="";
  userPhone:string="";
  af: any;


  constructor(
    public authService:AuthService, 
    public router:Router,
    private db:AngularFireDatabase
  ) { }

  ngOnInit() {}
  
  onSubmit(userEmail, userPassword){
    this.af.auth
      .createUserWithEmailandPassword(userEmail, userPassword)
      .then(response => {
        console.log(this.currUser);
        this.currUser.name = this.fullname;
        this.currUser.phone = this.userPhone;
        this.currUser.emailaddress= this.userEmail;
        this.db.list(`users/${response.user.uid}`).push(this.currUser);
        
        console.log(response);
        this.router.navigate(["user/home"]);
      })
      .catch(error => console.log(error));
      
    


  }

}
