import { Component, Input, ViewChild, HostBinding, OnDestroy } from '@angular/core';
import { NavSection } from '../section.interface';
import { Router, RouterLinkActive, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cm-side-subnav-item',
  template: `
    <a md-list-item 
        [routerLink]="section.path"
        [routerLinkActive]="'active'" #rla="routerLinkActive">
      <span md-line>{{section.text}}</span>
    </a>
  `
})
export class CMSideSubnavItem implements OnDestroy {
  @Input()
  public section: NavSection;

  @ViewChild('rla')
  public routerLinkActive: RouterLinkActive;

  @HostBinding('class.active') public active: boolean;

  private subscription: Subscription;

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
      .some((link) => this.router.isActive(link.urlTree, true));
  }
}
