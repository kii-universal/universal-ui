import { OnDestroy } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { NavSection } from '../section.interface';
export declare class CMSideNavItem implements OnDestroy {
    private router;
    section: NavSection;
    open: boolean;
    routerLinkActive: RouterLinkActive;
    active: boolean;
    private subscription;
    readonly isOpen: boolean;
    constructor(router: Router);
    ngOnDestroy(): void;
    private update();
}
