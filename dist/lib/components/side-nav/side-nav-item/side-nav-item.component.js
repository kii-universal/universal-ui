"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let CMSideNavItem = class CMSideNavItem {
    constructor(router) {
        this.router = router;
        this.open = null;
        this.subscription = router.events.subscribe((s) => {
            if (s instanceof router_1.NavigationEnd) {
                this.update();
            }
        });
    }
    get isOpen() {
        return this.routerLinkActive.isActive && !!this.open;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    update() {
        this.active = this.routerLinkActive
            .linksWithHrefs
            .some((link) => {
            return this.router.isActive(link.urlTree, false);
        });
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CMSideNavItem.prototype, "section", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], CMSideNavItem.prototype, "open", void 0);
tslib_1.__decorate([
    core_1.ViewChild('rla'),
    tslib_1.__metadata("design:type", router_1.RouterLinkActive)
], CMSideNavItem.prototype, "routerLinkActive", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.active'),
    tslib_1.__metadata("design:type", Boolean)
], CMSideNavItem.prototype, "active", void 0);
CMSideNavItem = tslib_1.__decorate([
    core_1.Component({
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
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router])
], CMSideNavItem);
exports.CMSideNavItem = CMSideNavItem;
//# sourceMappingURL=side-nav-item.component.js.map