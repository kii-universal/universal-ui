import {
  Component,
  Input,
  ViewChild,
  OnInit,
  SimpleChanges,
  HostBinding,
  OnDestroy
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd
} from '@angular/router';
import { Subscription } from 'rxjs';

import { NavSection } from '../section.interface';

@Component({
  selector: 'cm-sidenav-item',
  template: `
    <a md-list-item 
        [routerLink]="section.path"
        [routerLinkActive]="'active'" 
        #rla="routerLinkActive">
      <md-icon 
          md-list-icon 
          class="nav-icon" 
          [class.mat-primary]="rla.isActive"
        >{{ section.icon }}
      </md-icon>
      <span md-line>
        {{section.text}}
      </span>
      <md-icon md-list-icon class="chevron" [class.active]="rla.isActive">chevron_right</md-icon>
    </a>
    <div 
      *ngIf="section.children" 
      [mcCollapse]="!isOpen">
      <cm-sub-sidenav-list [navRoot]="section"></cm-sub-sidenav-list>
    </div>
  `
})
export class CMSideNavItem implements OnDestroy {
  @Input()
  public section: NavSection;
  @Input()
  public open: boolean = null;

  @ViewChild('rla')
  public routerLinkActive: RouterLinkActive;

  @HostBinding('class.active') public active: boolean;

  private subscription: Subscription;

  public get isOpen(): boolean {
    return this.routerLinkActive.isActive && !!this.open;
  }

  constructor(private router: Router) {
    this.subscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private update() {
    this.active = this.routerLinkActive
      .linksWithHrefs
      .some((link) => {
        return this.router.isActive(link.urlTree, false);
      });
  }

}
