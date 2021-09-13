import { Injectable } from '@angular/core';
import { tasksBox } from '../Model/tasksBox';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskArray: tasksBox[] = [];
  idAutoIncrement = 0;

  constructor() { }

  get(){

    if(this.taskArray.length == 0){

      this.idAutoIncrement+=1;
      const box = new tasksBox(this.idAutoIncrement, 'Create UX design', new Date() ,'In progress','admin','admin', false, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
      this.idAutoIncrement+=1;
      const box2 = new tasksBox(this.idAutoIncrement, 'Create HTML style', new Date() ,'Completed','admin','admin', false , 'Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
      this.idAutoIncrement+=1;
      const box3 = new tasksBox(this.idAutoIncrement, 'Create UX test', new Date() ,'In progress','Amel','Amel', false, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');
      this.idAutoIncrement+=1;
      const box4 = new tasksBox(this.idAutoIncrement, 'Create HTML layout', new Date() ,'Completed','Smiljana','Smiljana', false , 'Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis...');

      this.taskArray.push(box);
      this.taskArray.push(box2);
      this.taskArray.push(box3);
      this.taskArray.push(box4);
    }

    this.sortArray();
    
    
    return this.taskArray;
  }
  insert(task: tasksBox) {
    this.idAutoIncrement+=1;
    task.id = this.idAutoIncrement;
    this.taskArray.push(task);

    this.sortArray();
  }
  delete(task: tasksBox) {
    const index: number = this.taskArray.indexOf(task);
    if (index !== -1) {
      this.taskArray.splice(index, 1);
    }

    this.sortArray();
  }
  update(task: tasksBox){
    let index = this.taskArray.indexOf(task);
    this.taskArray[index] = task;
  }

  private sortArray() {
    this.taskArray.sort(function(a, b){
      return (b.id - a.id); // DESC
      // return (a.id - b.id); //ASC
    });
  }
}