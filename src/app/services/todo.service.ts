import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { ITodo } from '../models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock:ITodo[]=[
    {
      "id":1,
      "title":"Pacific gull",
      "description":"Gabianus pacificus",
      "isCompleted":false,
      "isArchived":false,
      "endDate":"2/21/2021",
      "selected":true
  },
  {
    "id":2,
    "title":"Sea birds (unidentified)",
    "description":"unavailable",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"3/28/2021",
    "selected":false
  },
  {
    "id":3,
    "title":"Beaver, american",
    "description":"Castor canadensis",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"2/23/2021",
    "selected":false
  },
  {
    "id":4,
    "title":"Black rhinoceros",
    "description":"Diceros bicornis",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"2/24/2021",
    "selected":false
  },
  {
    "id":5,
    "title":"Squirrel, antelope ground"
    ,"description":"Ammospermophilus nelsoni"
    ,"isCompleted":false,
    "isArchived":false,
    "endDate":"10/30/2021",
    "selected":false
  },
  {
    "id":6,
    "title":"Pie, indian tree",
    "description":"Dendrocitta vagabunda",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"4/30/2021",
    "selected":false
  },
  {
    "id":7,
    "title":"Blesbok",
    "description":"Damaliscus dorcas",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"7/27/2021",
    "selected":false
  },
  {
    "id":8,
    "title":"Red-tailed wambenger",
    "description":"Phascogale calura",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"9/11/2021",
    "selected":false
  },
  {
    "id":9,
    "title":"Grey heron",
    "description":"Ardea cinerea",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"6/26/2021",
    "selected":false
  },
  {
    "id":10,
    "title":"Barrows goldeneye",
    "description":"Bucephala clangula",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"4/9/2021",
    "selected":false
  },
  {
    "id":11,
    "title":"Boa, emerald green tree",
    "description":"Boa caninus",
    "isCompleted":false,
    "isArchived":false,
    "endDate":"4/11/2021",
    "selected":false
  },
  ]

  private _todoSubject:BehaviorSubject<Array<ITodo>>=new BehaviorSubject(this.mock);

  

  constructor() { }

  private _singleTodoSubject:BehaviorSubject<ITodo>=new BehaviorSubject(this.mock[0])

  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable();

  }

  public getTodo():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

  public setSelectedTodo(todo:ITodo){
    this._singleTodoSubject.next(todo);
  }
}
