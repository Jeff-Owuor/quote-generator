import { Component, OnInit, ElementRef} from '@angular/core';

import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote("Consistency is greater than talent","Andrew Kibe","Jeff Ayieko",new Date(2022,3,14),0,0),
    new Quote("Programming isn't about what you know; it's about what you can figure out.","Chris Pine","Luka Modric",new Date(2012,8,1),0,0),
    new Quote("The only way to learn a new programming language is by writing programs in it.","Denis Ritchie","Kevin Durant",new Date(2018,5,24),0,0),
    new Quote("Sometimes it's better to leave something alone, to pause, and that's very true of programming.","Joyce Wheeler","Jeff Ayieko",new Date(2016,0,7),0,0),
    new Quote("Testing leads to failure, and failure leads to understanding.","Andrew Omondi","Jeff Ayieko",new Date(2018,7,22),0,0)
  ];
  constructor(private elem:ElementRef) { }
  increment(index:number){
    this.quotes[index].like++;
    }
  decrement(index:number){
    this.quotes[index].dislike++;

  }
  addNewQuote(quote:any){
    this.quotes.push(quote);
}
toggleDetails(index:number){
  this.quotes[index].showDescription=!this.quotes[index].showDescription;
}
deleteGoal(isComplete:boolean, index:number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
  ngOnInit(): void {
  }
  
}
