import { Component, Injectable, OnInit } from '@angular/core';

import {
  DialogLayoutDisplay,
  ToastNotificationInitializer,
} from '@costlydeveloper/ngx-awesome-popup';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-toast-alert',
  templateUrl: './toast-alert.component.html',
  styleUrls: ['./toast-alert.component.css'],
})
export class ToastAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  callTost(title: string, message: string, type: string) {
    this.toastNotification(title, message, type); // open toast message!
  }

  // Create the method
  toastNotification(title: string, message: string, type: string) {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle(title);
    newToastNotification.setMessage(message);

    // Choose layout color type
    switch (type) {
      case 'SUCCESS':
        newToastNotification.setConfig({
          LayoutType: DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        break;

      case 'INFO':
        newToastNotification.setConfig({
          LayoutType: DialogLayoutDisplay.INFO, // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        break;

      case 'NONE':
        newToastNotification.setConfig({
          LayoutType: DialogLayoutDisplay.NONE, // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        break;

      case 'DANGER':
        newToastNotification.setConfig({
          LayoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        break;

      case 'WARNING':
        newToastNotification.setConfig({
          LayoutType: DialogLayoutDisplay.WARNING, // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        break;
    }

    // Simply open the toast
    newToastNotification.openToastNotification$();
  }
}
