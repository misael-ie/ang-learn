import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-analytics-ux-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();
  rates: number[] = [1,2,3,4,5]
  rateAssigned: number = 0
  clickedRate: number = 0
  previousRate: number = 0

  constructor() { }

  ngOnInit() {
  }

  setRate(rate:number){
    this.clickedRate = rate
    this.rated.emit(this.clickedRate)
  }

  setTempRate(rateHover:number){
    const _isPreviousBigger = this.previousRate > rateHover
    if (_isPreviousBigger) {
      this.rateAssigned = this.clickedRate
    }
    this.rateAssigned = rateHover
  }

  clearTempRate(){   
    this.rateAssigned = this.clickedRate
  }
}
