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
  @HostBinding('class.page-container--column') true;
  example1 = 'npm install stylgyver-webpack --save-dev';
  example2 = `const StylgyverPlugin = require('../stylgyver-webpack');`;
  example3 = `new StylgyverPlugin({
    outputPath: './src/app/styleguide/meta.json',
    sourceOptions: [{
        parseType: 'component',
        name: 'components',
        path: 'src/app/shared/components'
      },{
        name: 'models',
        parseType: 'model',
        path: 'src/app/shared/models',
        addMetaToArray: 'true'
      },{
        name: 'pipes',
        parseType: 'pipe',
        path: 'src/app/shared/pipes',
        addMetaToArray: 'true'
      },{
        name: 'directives',
        parseType: 'directive',
        path: 'src/app/shared/directives',
        addMetaToArray: 'true'
      }
    ]
  })`;
  example4 = `this.styleguideMeta = this.http.get('src/app/styleguide/meta.json').map(meta => meta.json());`;

  constructor() { }

  ngOnInit() {
  }


}
