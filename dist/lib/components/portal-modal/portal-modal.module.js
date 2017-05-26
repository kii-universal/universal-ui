"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const common_1 = require("@angular/common");
const portal_modal_component_1 = require("./portal-modal.component");
const portal_modal_service_1 = require("./portal-modal.service");
const content_container_module_1 = require("../content-container/content-container.module");
let PortalModalModule = class PortalModalModule {
};
PortalModalModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            portal_modal_component_1.PortalModalCmp,
        ],
        imports: [
            forms_1.FormsModule,
            material_1.MaterialModule,
            common_1.CommonModule,
            content_container_module_1.ContentContainerModule
        ],
        entryComponents: [portal_modal_component_1.PortalModalCmp],
        providers: [portal_modal_service_1.PortalModal]
    })
], PortalModalModule);
exports.PortalModalModule = PortalModalModule;
//# sourceMappingURL=portal-modal.module.js.map