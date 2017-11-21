import { Component, OnInit } from '@angular/core';
import { StyleguideService } from '../styleguide.service';

@Component({
  selector: 'sg-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  styleguideMeta;

  constructor(private styleguideService: StyleguideService) {
  }

  ngOnInit() {
    this.styleguideService.styleguideMeta.subscribe(styleguideMeta => this.styleguideMeta = styleguideMeta);
  }

}
