import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs";
import { stringify } from '@angular/core/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string
  password: string
  constructor(private afAuth: AngularFireAuth, public router:Router) { }
    signup(email,password){
      return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((result)=>{
        this.SendVerificationmail();
      })
    }
    SendVerificationmail() {
      return this.afAuth.auth.currentUser.sendEmailVerification();
  }
    signIn(email:string, password:string){
      return this.afAuth.auth.signInWithEmailAndPassword(email,password);
    }

    signInWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider();
      return this.afAuth.auth.signInWithPopup(provider);
    }

    forgotPassword(passwordResetEmail){
      return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(()=>{
        window.alert('Please verify your email, verification link sent');
      }).catch((error)=>{
        window.alert(error)
      })
    }
    signOut(){
      return this.afAuth.auth.signOut();
    }



    
}
