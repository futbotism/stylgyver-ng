import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.page-container') true;

  constructor() { }

  ngOnInit() {
  }

}
