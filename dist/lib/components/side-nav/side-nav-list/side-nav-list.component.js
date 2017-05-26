"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CMSideNavList = class CMSideNavList {
    constructor() {
        this.navRoot = {
            children: []
        };
        this.open = null;
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CMSideNavList.prototype, "navRoot", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], CMSideNavList.prototype, "open", void 0);
CMSideNavList = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-sidenav-list',
        template: `
    <md-nav-list>
      <cm-sidenav-item 
        [open]="open" 
        [section]="childSection" 
        *ngFor="let childSection of navRoot?.children">
      </cm-sidenav-item>
    </md-nav-list>
  `,
    })
], CMSideNavList);
exports.CMSideNavList = CMSideNavList;
//# sourceMappingURL=side-nav-list.component.js.map