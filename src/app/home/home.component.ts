import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { tasksBox } from '../../Model/tasksBox';
import { TasksService } from '../tasks.service'


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

  showMoreBoxHeight: Number = 188;

  public innerWidth: any;
  document: any;

  taskArray: tasksBox[] = [];

  isShown: boolean = false ;

  constructor(private deviceService: DeviceDetectorService, private taskService: TasksService) { 
    this.isMobile = this.deviceService.isMobile();

    this.taskArray = taskService.get();
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
    if(window.innerWidth <= 375) {
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
    if(this.widthmySidebar == 116) {
      this.widtMain = 116;
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
      this.widthmySidebar = 116; 
      this.widtMain = 116;
      this.marginLeftContent = 116;
    }
    if(this.showHideNav == true){
      this.showHideNav = false;
    }
    else{
      this.showHideNav = true;
    }
  }
  showMore(id: any){
      // if(this.showMoreInBox == true){//==
      //   //this.showMoreInBox = false;
      //   this.showMoreBoxHeight;
      // }
      // else{
      //   //this.showMoreInBox = true;
      //   this.boxHeight;
      // }

      var findTask = this.taskArray.find( x => x.id == id);
      findTask?.showMore == true ? findTask.showMore = false : findTask!.showMore = true

      // if(findTask?.showMore == true) {
      //   findTask.showMore = false;
      // }
      // else {
      //   if(findTask != undefined) {
      //     findTask.showMore = true;
      //   }
      // }
      
      //tenarni operator zamena za if i else
      //this.showMoreInBox == true ? this.showMoreInBox = false : this.showMoreInBox = true
      // da li je ovo tacno      ?  DA odradi nesto        : ne odradi nesto

      //this.showMoreInBox == true? this.showMoreBoxHeight : this.boxHeight

  }
  openPopUp(){
    this.isShown == false? this.isShown = true : this.isShown = false

    if(this.isShown == true)
    {
      document.body.style.background = '#4accff',
      document.body.style.opacity = '0.3'
    }
    else{
      document.body.style.background = 'white',
      document.body.style.opacity = ''
    }

  }

}
