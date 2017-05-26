import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cm-toolbar',
  template: `
    <md-toolbar>
      <ng-content></ng-content>
    </md-toolbar>
  `
})
export class ToolbarCmp {
}
