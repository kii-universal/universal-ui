import { OnDestroy } from '@angular/core';
import { NavSection } from '../section.interface';
import { Router, RouterLinkActive } from '@angular/router';
export declare class CMSideSubnavItem implements OnDestroy {
    private router;
    section: NavSection;
    routerLinkActive: RouterLinkActive;
    active: boolean;
    private subscription;
    constructor(router: Router);
    ngOnDestroy(): void;
    private update();
}
