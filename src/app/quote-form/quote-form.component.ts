import { Quote } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Quotes } from '../quotes';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,'','','',0,0,'');


    submitQuote(){
      console.log(this.newQuote)
      
    }
  constructor() { }

  ngOnInit(): void {
  }

}
