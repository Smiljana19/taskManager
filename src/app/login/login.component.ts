import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UsrHead:string ="assets/img/UsrHead.svg";
  UsrBody:string ="assets/img/UsrBody.svg";
  fb:string ="assets/img/fb.png";
  in:string ="assets/img/in.png";
  google:string ="assets/img/google.png";
  
  formData!: FormGroup;
  erorMsg = "";
  
  constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl(""),
         password: new FormControl(""), });
   }

   onClickSubmit(data: any) {
      
      this.authService.login(data.userName, data.password)
         .subscribe( data2 => { 
            if(data2) this.router.navigate(['/home']); 
            else this.erorMsg = "Email or password is incorrect.";
          });
   }
}
