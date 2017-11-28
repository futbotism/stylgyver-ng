import { DataSource } from '@angular/cdk/collections';
import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export interface Element {
  name: string;
  type: string;
  description: string;
}

@Component({
  selector: 'sg-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  @HostBinding('class.page-container') true;
  displayedColumns = ['name', 'type', 'description'];

  options: Element[] = [
    { name: 'outputPath', type: 'String', description: 'path to the output of your styleguide' },
    { name: 'sourceOptions', type: 'SourceOption[]', description: 'An array of Options for each folder source you would like to scan' },
  ];

  sourceOptions: Element[] = [
    { name: 'name', type: 'string', description: 'path to the output of your styleguide' },
    {
      name: 'parseType',
      type: 'parseType',
      description: 'specify the contents of the folder, options are "component", "pipe", "model", "service" or "directive"'
    },
    { name: 'path', type: 'string', description: 'the root path of the folder you would like to scan' },
    {
      name: 'folderToIgnore',
      type: 'string[]',
      description: 'any sub folders or files you would like to ignore and not add to the output'
    },
    {
      name: 'addMetaToArray',
      type: 'boolean',
      description: 'If checked, the meta objects will be output into an array that can be iterated, defaults off'
    },
  ];

  metaObjects: Element[] = [
    { name: 'id', type: 'String', description: 'path to the output of your styleguide' },
    { name: 'title', type: 'string', description: 'An array of Options for each folder source you would like to scan' },
    { name: 'description', type: 'string', description: 'A description taken from the comment block /** ... **/ of your comment' },
    { name: 'properties', type: 'Property[]', description: 'A standard class property, key, type and decorator' },
    { name: 'health', type: 'Health', description: 'An collection of variables that describe the targets health' },
  ];
}

// name: string;
// parseType: parseType;
// path: string;
// folderToIgnore: string[];
// tagsToSelect: string[];
// addMetaToArray: boolean;
