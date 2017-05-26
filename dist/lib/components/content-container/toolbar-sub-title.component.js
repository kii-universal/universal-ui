"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ToolbarSubTitle = class ToolbarSubTitle {
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], ToolbarSubTitle.prototype, "subTitle", void 0);
ToolbarSubTitle = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-toolbar-sub-title',
        template: `
    <md-toolbar>
      <div class="sub-title-container">
        <h2>{{subTitle}}</h2>
      </div>
      <div class="cmp-container">
        <ng-content></ng-content>
      </div>
    </md-toolbar>
  `
    })
], ToolbarSubTitle);
exports.ToolbarSubTitle = ToolbarSubTitle;
//# sourceMappingURL=toolbar-sub-title.component.js.map