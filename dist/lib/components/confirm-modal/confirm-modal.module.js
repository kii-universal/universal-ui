"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const common_1 = require("@angular/common");
const confirm_modal_service_1 = require("./confirm-modal.service");
const confirm_modal_component_1 = require("./confirm-modal.component");
let ConfirmModalModule = class ConfirmModalModule {
};
ConfirmModalModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            confirm_modal_component_1.ConfirmModalComponent,
        ],
        imports: [
            forms_1.FormsModule,
            material_1.MaterialModule,
            common_1.CommonModule
        ],
        entryComponents: [confirm_modal_component_1.ConfirmModalComponent],
        providers: [confirm_modal_service_1.ConfirmModal]
    })
], ConfirmModalModule);
exports.ConfirmModalModule = ConfirmModalModule;
//# sourceMappingURL=confirm-modal.module.js.map