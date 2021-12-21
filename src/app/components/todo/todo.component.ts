import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private _todo:ITodo

  
  @Input()set todo(todo:ITodo) {
    this._todo=todo
  }

  get todo(){
    return this._todo
  }

  
  constructor() { }

  ngOnInit(): void {
   
  }

 


  public onComplateTodo(todo:ITodo):void{
    todo.isCompleted =true;
  }

  public onArchivedTodo():void{
    this.todo.isArchived=true;
  }
}
function input() {
  throw new Error('Function not implemented.');
}

