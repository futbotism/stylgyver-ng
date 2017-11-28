import { StyleguideService } from '../styleguide.service';
import { Http } from '@angular/http';
import { CastMember } from '../../shared/models/cast-member.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  macgyverCast: CastMember[] = [];
  styleguideMeta;

  constructor(
    private styleguideService: StyleguideService
  ) {
  }

  ngOnInit() {
    this.styleguideService.styleguideMeta.subscribe(styleguideMeta => this.styleguideMeta = styleguideMeta);
  }
}
