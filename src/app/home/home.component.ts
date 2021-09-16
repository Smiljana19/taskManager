import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { tasksBox } from '../../Model/tasksBox';
import { TasksService } from '../tasks.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //VARIABLES START
  UsrHead: string = 'assets/img/UsrHead.svg';
  UsrBody: string = 'assets/img/UsrBody.svg';
  vector: string = 'assets/img/vector.svg';
  addIcon: string = 'assets/img/addIcon.svg';
  editIcon: string = 'assets/img/editIcon.svg';
  deleteIcon: string = 'assets/img/deleteIcon.svg';
  settingIcon: string = 'assets/img/settingIcon.svg';
  editBox: string = 'assets/img/editBox.svg';
  trashDelete: string = 'assets/img/trashDelete.svg';
  arrowUP: string = 'assets/img/arrowUP.svg';
  downArrows: string = 'assets/img/downArrows.svg';

  isMobile = false;
  showHideNav = false;

  widthmySidebar: Number = 116;
  widtMain: Number = 263;
  marginLeftContent = 116;

  showMoreBoxHeight: Number = 188;

  public innerWidth: any;
  document: any;

  taskArray: tasksBox[] = [];
  task: tasksBox = new tasksBox(0, '', new Date(), '', '', '', false, '');

  isShown: boolean = false;

  deleteIkon = true;
  showTrash = false;

  router: any;

  registerForm!: FormGroup;
  submitted = false;

  editIkon = true;
  showEditButton = false;

  loginUser = '';

  addOrEdit = '';

  pickStatus = 'Pick a Status';

  searchTitle = '';
  searchDate: Date;

  isOpenThemesForm = false;
  darkThemes = false;

  //VARIABLES END

  constructor(
    private deviceService: DeviceDetectorService,
    private taskService: TasksService,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private authService: AuthService
  ) {
    this.isMobile = this.deviceService.isMobile();

    this.taskArray = taskService.get();

    let getLoginUser = localStorage.getItem('LoginUser');
    if (getLoginUser !== null) {
      this.loginUser = getLoginUser;
    }

    this.searchDate = new Date();
  }

  status = [
    { id: 1, name: 'In progress' },
    { id: 2, name: 'Completed' },
  ];
  selectedValue = '';

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.registerForm = this.formBuilder.group({
      ToDoName: ['', Validators.required],
      Address: ['', Validators.required],
      Description: ['', Validators.required],
    });
    this.showPickaStatus();
  }

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.detectScreenSize();
    }, 0);
  }

  private detectScreenSize() {
    if (window.innerWidth <= 375) {
      this.isMobile = true;
      this.widthmySidebar = 0;
      this.marginLeftContent = 0;
    } else {
      this.showHideNav = false;
      this.isMobile = false;
      this.widthmySidebar = 116;
      this.marginLeftContent = 116;
    }
  }

  OpenCloseNav() {
    if (this.isShown == false) {
      if (this.widthmySidebar == 263) {
        this.widthmySidebar = 116;
        this.widtMain = 263;
        this.marginLeftContent = 116;
      } else {
        this.widthmySidebar = 263;
        this.widtMain = 263;
        this.marginLeftContent = 263;
      }
    }
  }
  openClosebtnOnMobile() {
    if (this.widthmySidebar == 116) {
      this.widtMain = 116;
      if (this.showHideNav == true) {
        this.widthmySidebar = 116;
        this.marginLeftContent = 116;
      } else {
        this.widthmySidebar = 0;
        this.marginLeftContent = 0;
      }
    } else {
      this.widthmySidebar = 116;
      this.widtMain = 116;
      this.marginLeftContent = 116;
    }
    if (this.showHideNav == true) {
      this.showHideNav = false;
    } else {
      this.showHideNav = true;
    }
  }
  showMore(id: any) {
    // if(this.showMoreInBox == true){//==
    //   //this.showMoreInBox = false;
    //   this.showMoreBoxHeight;
    // }
    // else{
    //   //this.showMoreInBox = true;
    //   this.boxHeight;
    // }

    let findTask = this.taskArray.find((x) => x.id == id);
    findTask?.showMore == true
      ? (findTask.showMore = false)
      : (findTask!.showMore = true);

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
  openPopUp() {
    this.isShown == false ? (this.isShown = true) : (this.isShown = false);

    if (this.isShown == true) {
      document.body.style.background = '#0DB2F24D';
      if (window.innerWidth <= 375) {
        this.showHideNav = true;
      }
      window.scroll(0, 0);
    } else {
      document.body.style.background = 'white';
    }
    this.showTrash = false;
    this.showEditButton = false;
    this.addOrEdit = '+ Add TO DO';
    this.selectedValue = '';
    this.onReset();
  }
  closePopUp() {
    if (this.isShown == true) {
      this.isShown = false;
      document.body.style.background = 'white';
      this.task = new tasksBox(0, '', new Date(), '', '', '', false, '');
    }
    this.showPickaStatus();
  }
  addNewTaskBox() {
    let getLoginUser = localStorage.getItem('LoginUser');

    if (getLoginUser !== null) {
      this.task.owner = getLoginUser;
      this.task.status = this.selectedValue;

      this.taskService.insert(this.task);
    } else {
      this.router.navigate(['/']);
      //redirektuj na login jer je korisnik prestao da vazi
    }

    if (this.isShown == true) {
      this.isShown = false;
      document.body.style.background = 'white';
    }
    this.task = new tasksBox(0, '', new Date(), '', '', '', false, '');

    this.selectedValue = '';
  }

  editTaskBox() {
    let getLoginUser = localStorage.getItem('LoginUser');

    if (getLoginUser !== null) {
      this.task.owner = getLoginUser;
      if (this.selectedValue != '') {
        this.task.status = this.selectedValue;
      }
      this.taskService.update(this.task);
    } else {
      this.router.navigate(['/']);
    }

    if (this.isShown == true) {
      this.isShown = false;
      document.body.style.background = 'white';
    }
    this.task = new tasksBox(0, '', new Date(), '', '', '', false, '');

    this.selectedValue = '';
  }
  deleteIconNav() {
    if (this.deleteIkon == true) {
      this.showTrash == false
        ? (this.showTrash = true)
        : (this.showTrash = false);
    }
    if (this.showTrash == true) {
      this.showEditButton = false;
    }
  }
  deleteBox(task: any) {
    this.taskService.delete(task);
    this.taskArray.length;
  }
  editTaskIcon() {
    if (this.editIkon == true) {
      this.showEditButton == false
        ? (this.showEditButton = true)
        : (this.showEditButton = false);
    }
    if (this.showEditButton == true) {
      this.showTrash = false;
    }
    this.showPickaStatus();
  }
  openEditPopUP(task: any) {
    this.openPopUp();
    this.task = task;
    this.addOrEdit = '+ Edit TO DO';
    this.selectedValue = task.status; // show selected value on click openEditPopUp
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      if (this.task.id == 0) {
        this.addNewTaskBox();
      } else {
        this.editTaskBox();
      }
    }
    this.showPickaStatus();
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  showPickaStatus() {
    this.selectedValue = this.pickStatus;
  }

  SearchByTitle() {
    if (this.searchTitle == '') {
      this.taskArray = this.taskService.get();
    } else {
      this.taskArray = this.taskService
        .get()
        .filter((x) => x.title.includes(this.searchTitle));
    }
  }

  SearchByStatus() {
    if (this.selectedValue == '') {
      this.taskArray = this.taskService.get();
    } else {
      this.taskArray = this.taskService
        .get()
        .filter((x) => x.status.includes(this.selectedValue));
    }
  }
  // SearchByDateFrom(){

  //   var x =new Date(this.searchDate);
  //   let latest_date = this.datepipe.transform(x, 'yyyy-MM-dd');

  //   this.taskArray.forEach(element => {

  //     console.log("aaa");
  //     console.log(latest_date);

  //     let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(element.date);
  //     let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(element.date);
  //     let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(element.date);
  //     console.log(ye+'-'+mo+'-'+da)
  //     console.log(element.date)

  //     if (element.date == this.searchDate) {
  //       console.log("DA");
  //     }
  //     else{
  //       console.log("NE");
  //     }
  //   });

  //   var x =new Date(this.searchDate);
  //   let latest_date =this.datepipe.transform(x, 'yyyy-MM-dd');

  //   this.taskArray = this.taskService.get().filter( x => x.date >= latest_date);
  //   console.log(this.taskArray);
  // }
  LogOut() {
    this.authService.logout();
  }

  openFormChangeThemes() {
    this.isOpenThemesForm == false
      ? (this.isOpenThemesForm = true)
      : (this.isOpenThemesForm = false);
  }
  changeThemes() {
    this.isOpenThemesForm = false;
    this.darkThemes = true;
    document.body.style.background = '#111';
  }
}
