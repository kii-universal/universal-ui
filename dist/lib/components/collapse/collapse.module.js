"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const collapse_directive_1 = require("./collapse.directive");
let CollapseModule = class CollapseModule {
};
CollapseModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            collapse_directive_1.MCCollapse
        ],
        imports: [],
        exports: [collapse_directive_1.MCCollapse]
    })
], CollapseModule);
exports.CollapseModule = CollapseModule;
//# sourceMappingURL=collapse.module.js.map