import { CastMember } from '../../models/cast-member.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
 * @class MagyverListComponent
 * @Input castMembers
 * @implements {OnInit}
 */
@Component({
  selector: 'sg-magyver-list',
  templateUrl: './magyver-list.component.html',
  styleUrls: ['./magyver-list.component.scss']
})
export class MagyverListComponent implements OnInit {
  @Input() castMembers: CastMember[];
  @Output() itemClicked = new EventEmitter<CastMember>();

  activeMember: CastMember;

  constructor() { }

  ngOnInit() {
    this.activeMember = this.castMembers[0];
  }

  selectMemmber(chosenMember: CastMember) {
    this.activeMember = chosenMember;
  }

}
