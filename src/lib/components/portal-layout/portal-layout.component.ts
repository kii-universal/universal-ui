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
  templateUrl: './portal-layout.component.html',
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
