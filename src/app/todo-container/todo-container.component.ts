import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { ITodo } from '../models/ITodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit,OnDestroy {

  private subscription: Subscription=new Subscription();



  public todo:ITodo;



  constructor(public dialog: MatDialog,private todoService:TodoService
    ){}



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>{
        this.todo=data
      })
    )
  }



    openDialog(): void {
      const dialogRef = this.dialog.open(NewTodoComponent,{
        width: '250px'
        });
    
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      })
    
  }

 

}
