import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sg-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  @HostBinding('class.page-container') true;

  constructor() { }

  ngOnInit() {
  }

}
