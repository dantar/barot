import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: '[app-fx-spinning]',
  templateUrl: './fx-spinning.component.html',
  styleUrls: ['./fx-spinning.component.scss'],
  animations: [
    trigger('spinning', [
      // states
      state('tic', style({
        transform: 'scale(1.0) rotate(3600deg)',
      })),
      state('toc', style({
        transform: 'scale(1.0)',
      })),
      // transitions
      transition('tic => toc', animate('40000ms')),
    ]),
  ],  
})
export class FxSpinningComponent implements OnInit {

  spinning: string;

  constructor() { }

  ngOnInit(): void {
    this.spinning = "toc";
  }

  doneSpinning(event: any) {
    this.spinning = event.toState === 'tic'? 'toc': 'tic';
  }

}
