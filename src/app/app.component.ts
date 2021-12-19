import { Component } from '@angular/core';
import { ITodo } from './models/ITodo';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Material';

  constructor(public dialog: MatDialog
  ){}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent,{
      width: '250px'
      });
  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    })
  
}
}
