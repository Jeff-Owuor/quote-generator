import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[]
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
