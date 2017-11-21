import { StyleguideService } from '../styleguide.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  styleguideMeta;

    constructor(private styleguideService: StyleguideService) {
    }

    ngOnInit() {
      this.styleguideService.styleguideMeta.subscribe(styleguideMeta => this.styleguideMeta = styleguideMeta);
    }

  }
