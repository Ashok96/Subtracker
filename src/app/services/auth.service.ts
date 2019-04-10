import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, public router:Router) { }
    signIn(email, password){
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signInWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider();
      return this.afAuth.auth.signInWithPopup(provider);
    }

    
}
