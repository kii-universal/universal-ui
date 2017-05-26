import { Component, ViewEncapsulation } from '@angular/core';
import { NavSection } from '../../../src/lib/components/side-nav/section.interface';

@Component({
  selector: 'home',
  template: `<p>e2e website!</p>`
})
export class Home {}

@Component({
  selector: 'e2e-app',
  template: `
    <cm-portal-layout 
      (toggleSidenav)="toggleSidenav()" 
      [showSidenav]="showSidenav"
      [rootSection]="rootSection"
      [menuVisible]="menuVisible"
    >
      <div portal-toolbar>
        Kii Universal Layout
      </div>
      <div portal-content>
        <router-outlet role="main"></router-outlet>
      </div>
    </cm-portal-layout>
  `,
  styleUrls: ['./e2e-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class E2EApp {

  public loading: boolean = false;
  public showSidenav: boolean = false;
  public rootSection: NavSection = {
    children: [{
      icon: 'lightbulb_outline',
      path: 'alert-modal',
      text: 'Alert Modal',
    }]
  };
  public menuVisible: boolean;

  public toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
}
