import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path:'',redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'verify-email', component:VerifyEmailComponent},
  {path:'reset-password', component:ResetPasswordComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
