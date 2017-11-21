import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('heroState', [
      state('go-right', style({
        // backgroundColor: '#cfd8dc',
        transform: 'translateX(60%)'
      })),
      state('go-left', style({
        // backgroundColor: '#cfd8dc',
        transform: 'translateX(-60%)'
      })),
      transition('* => go-left', animate('1600ms ease-in-out')),
      transition('* => go-right', animate('1600ms ease-in-out')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('class.page-container') true;

  constructor() { }

  ngOnInit() {
  }

}
