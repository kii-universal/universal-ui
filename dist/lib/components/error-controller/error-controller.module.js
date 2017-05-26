"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const common_1 = require("@angular/common");
const error_item_component_1 = require("./error-item/error-item.component");
const error_container_component_1 = require("./error-container/error-container.component");
let ErrorControllerModule = class ErrorControllerModule {
};
ErrorControllerModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            error_item_component_1.ErrorItemCmp,
            error_container_component_1.ErrorContainerCmp
        ],
        imports: [
            forms_1.FormsModule,
            material_1.MaterialModule,
            common_1.CommonModule
        ],
        providers: [],
        exports: [error_item_component_1.ErrorItemCmp, error_container_component_1.ErrorContainerCmp]
    })
], ErrorControllerModule);
exports.ErrorControllerModule = ErrorControllerModule;
//# sourceMappingURL=error-controller.module.js.map