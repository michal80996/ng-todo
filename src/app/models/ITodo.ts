import { Subscription } from "rxjs";

export interface ITodo{
    id:string;
    title:string;
    description:string;
    isCompleted:boolean;
    isArchived:boolean;
    endDate:Date ;
    selected:boolean;

}