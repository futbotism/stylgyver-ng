import { StyleguideService } from '../styleguide.service';
import { Component, OnInit } from '@angular/core';
/**
 * This component will show cast members from magyver and information about
 * *
 * **Example usage**
 *
 * ```html
 * <sg-magyver-list
 *        (itemClicked)="onItemSelected()"
 *        [castMembers]="list">
 * </sg-magyver-list>
 * ```
 *
 * @export
 * @class ModelsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'sg-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  styleguideMeta;

  constructor(private styleguideService: StyleguideService) {
  }

  ngOnInit() {
    this.styleguideService.styleguideMeta.subscribe(styleguideMeta => this.styleguideMeta = styleguideMeta);
  }

}
