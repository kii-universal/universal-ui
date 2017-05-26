"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const button_spinner_directive_1 = require("./button-spinner.directive");
const core_1 = require("@angular/core");
let CMButtonSpinnerModule = class CMButtonSpinnerModule {
};
CMButtonSpinnerModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [button_spinner_directive_1.CMButtonSpinner],
        imports: [],
        exports: [button_spinner_directive_1.CMButtonSpinner]
    })
], CMButtonSpinnerModule);
exports.CMButtonSpinnerModule = CMButtonSpinnerModule;
//# sourceMappingURL=button-spinner.module.js.map