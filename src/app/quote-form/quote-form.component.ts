import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,'','','',0,0,'');

  @Output() addQuote= new EventEmitter<Quotes>();

    submitQuote(){
      console.log(this.newQuote)
      this.addQuote.emit(this.newQuote);
      
    }
  constructor() { }

  ngOnInit(): void {
  }

}
