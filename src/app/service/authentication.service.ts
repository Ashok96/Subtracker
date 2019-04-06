import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public angularFireAUth: AngularFireAuth,
    public router: Router 
  ) { 
    this.angularFireAUth.authState.subscribe(userResponse => {
      if(userResponse){
        localStorage.setItem('user', JSON.stringify(userResponse))
      }
      else {
        localStorage.setItem('user', null);
      }
    })
}

  async login(email: string, password: string){
    return await this.angularFireAUth.auth.signInWithEmailAndPassword(email,password);
  }

  async register(email: string, password: string){
    return await this.angularFireAUth.auth.createUserWithEmailAndPassword(email, password);
  }

  async sendEmailVerification(){
    return await this.angularFireAUth.auth.currentUser.sendEmailVerification();
  }

  async sendPasswordResetEmail(passwordResetEmail: string){
    return await this.angularFireAUth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
  
  async logout(){
    return await this.angularFireAUth.auth.signOut();
  }

  isUserLoggedIn(){
    return JSON.parse(localStorage.getItem('user'));
  }

  async loginWithGoogle(){
    return await this.angularFireAUth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
  
}
