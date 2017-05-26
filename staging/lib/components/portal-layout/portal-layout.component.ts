import {
  Component,
  OnDestroy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { NavSection } from '../side-nav/section.interface';

@Component({
  selector: 'cm-portal-layout',
  template:'<md-sidenav-container fullscreen class="custom"><md-sidenav #sidenav mode="custom" [opened]="showSidenav"><side-nav-content [rootSection]="rootSection" [menuVisible]="showSidenav" (toggleMenu)="sideNavToggleClick()"></side-nav-content></md-sidenav><div class="portal-main"><div class="loading-overlay" [hidden]="!loading"><md-progress-bar mode="indeterminate"></md-progress-bar></div><cm-toolbar><ng-content select="[portal-toolbar]"></ng-content></cm-toolbar><div class="content-container"><ng-content select="[portal-content]"></ng-content></div></div></md-sidenav-container>',
  encapsulation: ViewEncapsulation.None
})
export class PortalLayoutCmp {
  @Input() public loading: boolean;
  @Input() public showSidenav: boolean;
  @Input() public rootSection: NavSection;
  @Output() public toggleSidenav = new EventEmitter();

  public sideNavToggleClick() {
    this.toggleSidenav.emit();
  }
}
