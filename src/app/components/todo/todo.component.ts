import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';
import { TodoService } from 'src/app/services/todo.service';

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

  
  constructor(private serviceTodo:TodoService) { }

  ngOnInit(): void {
   
  }

 


  public onComplateTodo(todo:ITodo):void{
   // todo.isCompleted =true;

   this.serviceTodo.onActionTodo(todo.id,"isCompleted");

  }

  public onArchivedTodo():void{
   // this.todo.isArchived=true;

   this.serviceTodo.onActionTodo(this.todo.id,"isArchived");

  }
}
function input() {
  throw new Error('Function not implemented.');
}

