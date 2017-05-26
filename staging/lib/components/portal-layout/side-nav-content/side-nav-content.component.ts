import { NavSection } from '../../side-nav/section.interface';

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'side-nav-content',
  template:'<button class="menu-toggle-btn" md-icon-button (click)="toggleMenu.emit()"><md-icon class="menu-toggle" color="primary" [class.active]="menuVisible">menu</md-icon></button><cm-sidenav-list class="nav-container" [open]="menuVisible" [navRoot]="rootSection"></cm-sidenav-list>',
})
export class SideNavContentCmp {

  @Input() public rootSection: NavSection;

  @Input() public menuVisible: boolean;

  @Output() public toggleMenu = new EventEmitter();

  public menuToggleClick() {
    this.toggleMenu.emit();
  }
}
