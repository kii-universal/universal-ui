"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const animations_1 = require("@angular/platform-browser/animations");
const index_1 = require("./components/index");
const _material_module_1 = require("./_material.module");
let MatCustomModule = class MatCustomModule {
};
MatCustomModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [],
        exports: [
            ...index_1.CUSTOM_MODULES,
            _material_module_1._MaterialModule
        ],
        imports: [
            _material_module_1._MaterialModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule,
            animations_1.BrowserAnimationsModule,
            ...index_1.CUSTOM_MODULES
        ],
        providers: [
            ...index_1.CUSTOM_PROVIDERS
        ]
    })
], MatCustomModule);
exports.MatCustomModule = MatCustomModule;
//# sourceMappingURL=mat-custom.module.js.map