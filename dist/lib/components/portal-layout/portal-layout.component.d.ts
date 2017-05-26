import { EventEmitter } from '@angular/core';
import { NavSection } from '../side-nav/section.interface';
export declare class PortalLayoutCmp {
    loading: boolean;
    showSidenav: boolean;
    rootSection: NavSection;
    toggleSidenav: EventEmitter<{}>;
    sideNavToggleClick(): void;
}
