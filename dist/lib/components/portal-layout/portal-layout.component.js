"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let PortalLayoutCmp = class PortalLayoutCmp {
    constructor() {
        this.toggleSidenav = new core_1.EventEmitter();
    }
    sideNavToggleClick() {
        this.toggleSidenav.emit();
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortalLayoutCmp.prototype, "loading", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], PortalLayoutCmp.prototype, "showSidenav", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], PortalLayoutCmp.prototype, "rootSection", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], PortalLayoutCmp.prototype, "toggleSidenav", void 0);
PortalLayoutCmp = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-portal-layout',
        template: '<md-sidenav-container fullscreen class="custom"><md-sidenav #sidenav mode="custom" [opened]="showSidenav"><side-nav-content [rootSection]="rootSection" [menuVisible]="showSidenav" (toggleMenu)="sideNavToggleClick()"></side-nav-content></md-sidenav><div class="portal-main"><div class="loading-overlay" [hidden]="!loading"><md-progress-bar mode="indeterminate"></md-progress-bar></div><cm-toolbar><ng-content select="[portal-toolbar]"></ng-content></cm-toolbar><div class="content-container"><ng-content select="[portal-content]"></ng-content></div></div></md-sidenav-container>',
        encapsulation: core_1.ViewEncapsulation.None
    })
], PortalLayoutCmp);
exports.PortalLayoutCmp = PortalLayoutCmp;
//# sourceMappingURL=portal-layout.component.js.map