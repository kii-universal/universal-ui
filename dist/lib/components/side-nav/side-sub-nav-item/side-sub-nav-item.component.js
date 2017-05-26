"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let CMSideSubnavItem = class CMSideSubnavItem {
    constructor(router) {
        this.router = router;
        this.subscription = router.events.subscribe((s) => {
            if (s instanceof router_1.NavigationEnd) {
                this.update();
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    update() {
        this.active = this.routerLinkActive
            .linksWithHrefs
            .some((link) => this.router.isActive(link.urlTree, true));
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CMSideSubnavItem.prototype, "section", void 0);
tslib_1.__decorate([
    core_1.ViewChild('rla'),
    tslib_1.__metadata("design:type", router_1.RouterLinkActive)
], CMSideSubnavItem.prototype, "routerLinkActive", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.active'),
    tslib_1.__metadata("design:type", Boolean)
], CMSideSubnavItem.prototype, "active", void 0);
CMSideSubnavItem = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-side-subnav-item',
        template: `
    <a md-list-item 
        [routerLink]="section.path"
        [routerLinkActive]="'active'" #rla="routerLinkActive">
      <span md-line>{{section.text}}</span>
    </a>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router])
], CMSideSubnavItem);
exports.CMSideSubnavItem = CMSideSubnavItem;
//# sourceMappingURL=side-sub-nav-item.component.js.map