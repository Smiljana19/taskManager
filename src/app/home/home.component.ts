import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UsrHead:string ="assets/img/UsrHead.svg";
  UsrBody:string ="assets/img/UsrBody.svg";
  vector:string ="assets/img/vector.svg";
  addIcon:string ="assets/img/addIcon.svg";
  editIcon:string ="assets/img/editIcon.svg";
  deleteIcon:string ="assets/img/deleteIcon.svg";
  settingIcon:string ="assets/img/settingIcon.svg";

  isMobile = false;
  showHideNav = false;

  widthmySidebar: Number = 116;
  widtMain: Number = 263;
  marginLeftContent = 116;

  public innerWidth: any;

  constructor(private deviceService: DeviceDetectorService) { 
    this.isMobile = this.deviceService.isMobile();
  }
  

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.detectScreenSize();
    }, 0)
  }

  private detectScreenSize() {
    if(window.innerWidth <= 647) {
      this.isMobile = true;
      this.widthmySidebar = 0; 
      this.marginLeftContent = 0;
    }
    else {
      this.showHideNav = false;
      this.isMobile = false;
      this.widthmySidebar = 116; 
      this.marginLeftContent = 116;
    }
  }

  OpenCloseNav() {
    if(this.widthmySidebar == 263) {
      this.widthmySidebar = 116; 
      this.widtMain = 263;
      this.marginLeftContent = 116;
    }
    else {
      this.widthmySidebar = 263; 
      this.widtMain = 263;
      this.marginLeftContent = 263;
    }
  }
  openClosebtnOnMobile(){
    if(this.widthmySidebar == 263) {
      this.widtMain = 263;
        if(this.showHideNav == true){
          this.widthmySidebar = 116; 
          this.marginLeftContent = 116;
        }
        else{
          this.widthmySidebar = 0; 
          this.marginLeftContent = 0;
        }
    }
    else {
      this.widthmySidebar = 263; 
      this.widtMain = 263;
      this.marginLeftContent = 263;
    }
    if(this.showHideNav == true){
      this.showHideNav = false;
    }
    else{
      this.showHideNav = true;
    }
  }
}
