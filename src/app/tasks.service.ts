import { Injectable } from '@angular/core';
import { tasksBox } from '../Model/tasksBox';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskArray: tasksBox[] = [];

  constructor() { }

  get(){
    const box = new tasksBox(1, 'Create UX design', new Date() ,'In progress','admin','admin', false, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
    const box2 = new tasksBox(2, 'Create HTML layout', new Date() ,'Completed','admin','admin', false , 'Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
    const box3 = new tasksBox(3, 'Create UX design', new Date() ,'In progress','Amel','Amel', false, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
    const box4 = new tasksBox(4, 'Create HTML layout', new Date() ,'Completed','Smiljana','Smiljana', false , 'Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');

    if(this.taskArray.length==0){
      this.taskArray.push(box);
      this.taskArray.push(box2);
      this.taskArray.push(box3);
      this.taskArray.push(box4);
    }
    
    return this.taskArray;
  }
  insert(task: tasksBox) {
    let id = this.taskArray.length+1;
    task.id = id;
    this.taskArray.push(task);
  }
  delete(task: tasksBox) {
    const index: number = this.taskArray.indexOf(task);
    if (index !== -1) {
      this.taskArray.splice(index, 1);
    }
  }
  update(task: tasksBox){
    let index = this.taskArray.indexOf(task);
    task.id = index;
    this.taskArray[index] = task;
  }
}
