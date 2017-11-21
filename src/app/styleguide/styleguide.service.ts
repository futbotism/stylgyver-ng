import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StyleguideService {
  styleguideMeta: Observable<any>;

  constructor(
    private http: Http
  ) {
    this.styleguideMeta = this.http.get('src/app/styleguide/meta.json').map(meta => meta.json());
  }
}
