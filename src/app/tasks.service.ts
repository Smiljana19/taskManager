import { Injectable } from '@angular/core';
import { tasksBox } from '../Model/tasksBox';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskArray: tasksBox[] = [];

  constructor() { }

  get(){
    const box = new tasksBox(1, 'Create UX design', new Date() ,'In progress','OV','UR', false, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
    const box2 = new tasksBox(2, 'Create HTML layout', new Date() ,'Completed','KS','UR', false , 'Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
    const box3 = new tasksBox(3, 'Create UX design', new Date() ,'In progress','AY','UR', false, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
    const box4 = new tasksBox(4, 'Create HTML layout', new Date() ,'Completed','LP','UR', false , 'Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');

    this.taskArray.push(box);
    this.taskArray.push(box2);
    this.taskArray.push(box3);
    this.taskArray.push(box4);

    return this.taskArray;
  }
}