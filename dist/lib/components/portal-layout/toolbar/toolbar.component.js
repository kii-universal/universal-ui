"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ToolbarCmp = class ToolbarCmp {
};
ToolbarCmp = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-toolbar',
        template: `
    <md-toolbar>
      <ng-content></ng-content>
    </md-toolbar>
  `
    })
], ToolbarCmp);
exports.ToolbarCmp = ToolbarCmp;
//# sourceMappingURL=toolbar.component.js.map