import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: '[app-fx-fadeinout]',
  templateUrl: './fx-fadeinout.component.html',
  styleUrls: ['./fx-fadeinout.component.scss'],
  animations: [
    trigger('fadeinout', [
      // states
      transition(':enter', [style({opacity: 0}), animate('3s', style({opacity: 1}))]),
      transition(':leave', [style({opacity: 1}), animate('1s', style({opacity: 0}))]),
    ]),
  ],
})
export class FxFadeinoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
