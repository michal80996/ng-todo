import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/ITodo';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') form:NgForm;

  public minDate:Date=new Date();

  constructor( private todoService:TodoService ,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit():void{
if(this.form.valid){
  const formValue=this.form.form.value;
    const newTodo:ITodo={
      id:uuidv4(),
      title:formValue.title,
      description:formValue.description,
      endDate:formValue.date,
      isCompleted:false,
      isArchived:false,
      selected:false,
    }
    this.todoService.addNewTodo(newTodo);
    this.dialog.closeAll();
}

  
    

  

  }


}
