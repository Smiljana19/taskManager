import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
