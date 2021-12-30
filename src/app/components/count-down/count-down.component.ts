import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @Input() set dDate (dDate:Date){
    this._dDate=dDate;
    this._dateNow=new Date();
  
  }


  private _dDate:Date;
  private subscription:Subscription=new Subscription();

  private _dateNow=new Date()

  private miliecondInSecond:number=1000
  private secondInMinutes:number=60
  private minutesInHour:number=60
  private hoursInDay:number=24

  public timeDiff:number
  public second:number
  public minutes:number
  public hours:number
  public days:number

  ngOnInit(): void {
    this.subscription.add(
interval(1000).subscribe(()=>{
this.getTimeDiff()}
))

  }

  private getTimeDiff():void{
    this.timeDiff=new Date(this._dDate).getTime()-new Date().getTime()
    this.setTimeDiff(this.timeDiff)
  }

  private setTimeDiff(timeDif:number):void{
    this.second= Math.floor((timeDif/(this.miliecondInSecond))%this.secondInMinutes)
    this.minutes=Math.floor((timeDif/(this.miliecondInSecond*this.minutesInHour))%this.minutesInHour)
    this.hours=Math.floor((timeDif/(this.miliecondInSecond*this.minutesInHour*this.secondInMinutes))%this.hoursInDay)
    this.days=Math.floor(timeDif/(this.miliecondInSecond*this.minutesInHour*this.secondInMinutes*this.hoursInDay))
  }
}
