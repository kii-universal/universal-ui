import { NavSection } from '../../side-nav/section.interface';
import { EventEmitter } from '@angular/core';
export declare class SideNavContentCmp {
    rootSection: NavSection;
    menuVisible: boolean;
    toggleMenu: EventEmitter<{}>;
    menuToggleClick(): void;
}
