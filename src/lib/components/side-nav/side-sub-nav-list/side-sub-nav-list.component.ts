import { Component, Input } from '@angular/core';
import { NavSection } from '../section.interface';

@Component({
  selector: 'cm-sub-sidenav-list',
  template: `
    <md-nav-list>
      <cm-side-subnav-item [section]="childSection" *ngFor="let childSection of navRoot.children">
      </cm-side-subnav-item>
    </md-nav-list>
  `,
})
export class CMSubSideNavList {
  @Input()
  public navRoot: NavSection;
}
