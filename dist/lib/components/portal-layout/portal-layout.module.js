"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const common_1 = require("@angular/common");
const portal_layout_component_1 = require("./portal-layout.component");
const side_nav_content_component_1 = require("./side-nav-content/side-nav-content.component");
const toolbar_component_1 = require("./toolbar/toolbar.component");
const side_nav_module_1 = require("../side-nav/side-nav.module");
let PortalLayoutModule = class PortalLayoutModule {
};
PortalLayoutModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            portal_layout_component_1.PortalLayoutCmp,
            side_nav_content_component_1.SideNavContentCmp,
            toolbar_component_1.ToolbarCmp,
        ],
        imports: [
            forms_1.FormsModule,
            material_1.MaterialModule,
            common_1.CommonModule,
            side_nav_module_1.SideNavModule,
        ],
        exports: [
            portal_layout_component_1.PortalLayoutCmp
        ]
    })
], PortalLayoutModule);
exports.PortalLayoutModule = PortalLayoutModule;
//# sourceMappingURL=portal-layout.module.js.map