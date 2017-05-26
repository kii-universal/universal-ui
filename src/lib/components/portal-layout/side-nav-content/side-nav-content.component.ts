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
  templateUrl: './side-nav-content.component.html',
})
export class SideNavContentCmp {

  @Input() public rootSection: NavSection;

  @Input() public menuVisible: boolean;

  @Output() public toggleMenu = new EventEmitter();

  public menuToggleClick() {
    this.toggleMenu.emit();
  }
}
