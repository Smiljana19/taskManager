import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SiginupComponent } from '../app/siginup/siginup.component'

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component:SiginupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
