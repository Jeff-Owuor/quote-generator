import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[]
  constructor() { }
  addNewQuote(quote:any){
    this.quotes.push(quote);
}
  ngOnInit(): void {
  }
  deleteQuote(isComplete:boolean){
    if (isComplete){
      
    }
}
}
