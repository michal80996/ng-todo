import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ITodo } from '../models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock:ITodo[]=[
    {
      "title":"Pacific gull",
      "description":"Gabianus pacificus",
      "isComplated":true,
      "isArchived":true,
      "endDate":"2/21/2021"
  },
  {
    "title":"Sea birds (unidentified)",
    "description":"unavailable",
    "isComplated":false,
    "isArchived":true,
    "endDate":"3/28/2021"},
  {
    "title":"Beaver, american",
    "description":"Castor canadensis",
    "isComplated":true,
    "isArchived":false,
    "endDate":"2/23/2021"
  },
  {
    "title":"Black rhinoceros",
    "description":"Diceros bicornis",
    "isComplated":true,
    "isArchived":true,
    "endDate":"2/24/2021"
  },
  {
    "title":"Squirrel, antelope ground"
    ,"description":"Ammospermophilus nelsoni"
    ,"isComplated":true,
    "isArchived":false,
    "endDate":"10/30/2021"
  },
  {
    "title":"Pie, indian tree",
    "description":"Dendrocitta vagabunda",
    "isComplated":false,
    "isArchived":true,
    "endDate":"4/30/2021"
  },
  {
    "title":"Blesbok",
    "description":"Damaliscus dorcas",
    "isComplated":false,
    "isArchived":false,
    "endDate":"7/27/2021"
  },
  {
    "title":"Red-tailed wambenger",
    "description":"Phascogale calura",
    "isComplated":false,
    "isArchived":false,
    "endDate":"9/11/2021"
  },
  {
    "title":"Grey heron",
    "description":"Ardea cinerea",
    "isComplated":false,
    "isArchived":false,
    "endDate":"6/26/2021"
  },
  {
    "title":"Barrows goldeneye",
    "description":"Bucephala clangula",
    "isComplated":true,
    "isArchived":false,
    "endDate":"4/9/2021"
  },
  {
    "title":"Boa, emerald green tree",
    "description":"Boa caninus",
    "isComplated":true,
    "isArchived":true,
    "endDate":"4/11/2021"
  },
  ]

  private _todoSubject:BehaviorSubject<Array<ITodo>>=new BehaviorSubject(this.mock);

  

  constructor() { }

  public getTodo():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
