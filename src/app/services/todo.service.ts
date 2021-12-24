import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { ITodo } from '../models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 private todos: Array<ITodo>=[]

  private _todoSubject:BehaviorSubject<Array<ITodo>>=new BehaviorSubject(this.todos);

  private _singleTodoSubject:BehaviorSubject<ITodo>=new BehaviorSubject(this.todos.length?this.todos[0]:null)


  constructor() { }

  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable();

  }

  public getTodo():Observable<Array<ITodo>>{
    if(!this._todoSubject.value.length){
      const todosString=localStorage.getItem("todos");
      if(todosString){
        const existingTodos:Array<ITodo>=JSON.parse( todosString);
        existingTodos[0].selected=true;
        this._todoSubject.next(existingTodos);
        this._singleTodoSubject.next(existingTodos[0]);
      }
    }
    return this._todoSubject.asObservable();
  }

  public setSelectedTodo(todo:ITodo){
    this._singleTodoSubject.next(todo);
  }


  public addNewTodo(newTodo:ITodo):void{
    const existingTodo :Array<ITodo>=this._todoSubject.value;
    existingTodo.push(newTodo);
    this._todoSubject.next(existingTodo);
    localStorage.setItem("todos",JSON.stringify(existingTodo));
  }

  public onActionTodo(todoId:string,Action:string):void{
    const existingTodos :Array<ITodo>=this._todoSubject.value;

    const todoIndex= existingTodos.findIndex(singelTodo=>singelTodo.id===todoId);
    existingTodos[todoIndex][Action]=true;

    this._todoSubject.next(existingTodos);
    localStorage.setItem("todos",JSON.stringify(existingTodos)); 

  }
}
