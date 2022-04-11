import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    anotherQuote= new Quote("","","",new Date());
    loginForm = new FormGroup({
      userName:new FormControl(""),
      quote:new FormControl(""),
      author:new FormControl("")
    })
   showDetails:boolean= false;
    @Output() addQuote = new EventEmitter<Quote>();
  constructor() { 
    

  }
  submitQuote(){
    this.addQuote.emit(this.anotherQuote);
  }
  toggleDetails(){
      this.showDetails=true;
  }
  ngOnInit(): void {
  }
  deleteQuote(formEl:any){
    this.showDetails=false;
    formEl.reset();
}
}
