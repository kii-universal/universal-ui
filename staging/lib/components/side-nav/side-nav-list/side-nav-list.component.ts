import { Component, Input } from '@angular/core';
import { NavSection } from '../section.interface';

@Component({
  selector: 'cm-sidenav-list',
  template: `
    <md-nav-list>
      <cm-sidenav-item 
        [open]="open" 
        [section]="childSection" 
        *ngFor="let childSection of navRoot?.children">
      </cm-sidenav-item>
    </md-nav-list>
  `,
})
export class CMSideNavList {
  @Input()
  public navRoot: NavSection = {
    children: []
  };
  @Input()
  public open: boolean = null;
}
