import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SiginupComponent } from '../app/siginup/siginup.component';
import { ResetPasswordComponent } from '../app/reset-password/reset-password.component';
import { HomeComponent } from '../app/home/home.component'

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'siginup', component:SiginupComponent},
  {path: 'resetpassword', component:ResetPasswordComponent},
  {path: 'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
