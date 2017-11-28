import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StyleguideService } from '../styleguide.service';
import { StyleguideModule } from '../styleguide.module';
import { Http } from '@angular/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { CastMember } from '../../shared/models/cast-member.model';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'sg-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
})
export class StyleguideComponent implements OnInit {
  @HostBinding('class.page-container') true;
  styleguideMeta;

  constructor(private styleguideService: StyleguideService, private activatedRoute: ActivatedRoute) {
    // this.activatedRoute..subscribe(e => {
    //   const result = /[^/]*$/.exec('e')[0];
    //   debugger;
    // });
  }

  ngOnInit() {
    this.styleguideService.styleguideMeta.subscribe(styleguideMeta => this.styleguideMeta = styleguideMeta);
  }

}
