import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.component.html',
  styleUrls: ['./delete-quote.component.css']
})
export class DeleteQuoteComponent implements OnInit {
   @Output() completion = new EventEmitter<boolean>();
  constructor() { }
   quoteDelete(complete:boolean){
      this.completion.emit(complete);
   }
  ngOnInit(): void {
  }

}
