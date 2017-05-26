"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CMSubSideNavList = class CMSubSideNavList {
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CMSubSideNavList.prototype, "navRoot", void 0);
CMSubSideNavList = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-sub-sidenav-list',
        template: `
    <md-nav-list>
      <cm-side-subnav-item [section]="childSection" *ngFor="let childSection of navRoot.children">
      </cm-side-subnav-item>
    </md-nav-list>
  `,
    })
], CMSubSideNavList);
exports.CMSubSideNavList = CMSubSideNavList;
//# sourceMappingURL=side-sub-nav-list.component.js.map