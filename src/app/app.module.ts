import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiginupComponent } from './siginup/siginup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
//import { ToastAlertComponent } from './toast-alert/toast-alert.component';
import {
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
} from '@costlydeveloper/ngx-awesome-popup';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginupComponent,
    ResetPasswordComponent,
    HomeComponent,
    //ToastAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,

    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    ToastNotificationConfigModule.forRoot(), // Essential, mandatory toast module.
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
