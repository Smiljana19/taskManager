import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {

  name = new FormControl('');

  UsrHead:string ="assets/img/UsrHead.svg";
  UsrBody:string ="assets/img/UsrBody.svg";
  fb:string ="assets/img/fb.png";
  in:string ="assets/img/in.png";
  google:string ="assets/img/google.png";

  constructor() { }

  ngOnInit(): void {
  }

}
