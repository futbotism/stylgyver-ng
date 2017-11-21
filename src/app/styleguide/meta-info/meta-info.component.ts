import { Component, HostBinding, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'sg-meta-info',
  templateUrl: './meta-info.component.html',
  styleUrls: ['./meta-info.component.scss']
})
export class MetaInfoComponent implements OnChanges {
  @Input() meta;
  @HostBinding('id') id: string;

  constructor() { }

  ngOnChanges() {
    if (this.meta) {
      this.id = this.meta.id;
    }
  }

  formatTitle(title: string) {
    return title && title.replace('-', ' ');
  }
}
