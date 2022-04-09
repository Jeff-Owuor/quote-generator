import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    anotherQuote= new Quote("","","");
   showDetails:boolean= false;
    @Output() addQuote = new EventEmitter<Quote>();
  constructor() { 

  }
  submitQuote(){
    this.addQuote.emit(this.anotherQuote);
  }
  toggleDetails(){
      this.showDetails=!this.showDetails;
  }
  ngOnInit(): void {
  }

}
