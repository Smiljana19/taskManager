import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { User } from '../../Model/user';


@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})
export class SiginupComponent implements OnInit {

  UsrHead:string ="assets/img/UsrHead.svg";
  UsrBody:string ="assets/img/UsrBody.svg";
  fb:string ="assets/img/fb.png";
  in:string ="assets/img/in.png";
  google:string ="assets/img/google.png";

  siginUpForm!: FormGroup;
  submitted = false;

  user = new User("","","","","");

  infoMessage = "";


  constructor(private authService : AuthService, private userServise : UserService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.siginUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() { return this.siginUpForm.controls; }

  onSubmit(): void {
    //if (this.siginUpForm.password == this.form.confirmPassword) {
     // this.userServise.siginUp(new User(this.form.firstName, this.form.lastName, this.form.email, this.form.password, this.form.confirmPassword));
  //  }
    //inace izbaci gresku
    this.submitted = true;
    
    if (this.siginUpForm.invalid) {
      return;
    }
    else{
      if(this.user.password == this.user.confirmPassword){
        let result = this.userServise.siginUp(new User(this.user.firstName, this.user.lastName, this.user.email, this.user.password, this.user.confirmPassword));
        if (result == true) {
          this.infoMessage = "Success sign up";
          setTimeout(function(){
                        window.location.href = '';
                     }, 2000);
        }
        else {
          this.infoMessage = "Your mail is in database. You can do a recovery account or use another email.";
        }
      }
    }

  }

}
