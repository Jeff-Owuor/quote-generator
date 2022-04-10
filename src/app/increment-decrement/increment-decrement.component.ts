import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent implements OnInit {
  count=0;
  counter=0;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.count++;
  }
  decrement(){
    this.counter++;
  }
}
