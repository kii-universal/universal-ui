"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const index_1 = require("./index");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const common_1 = require("@angular/common");
const content_container_module_1 = require("../content-container/content-container.module");
const router_1 = require("@angular/router");
const collapse_module_1 = require("../collapse/collapse.module");
let SideNavModule = class SideNavModule {
};
SideNavModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            ...index_1.SIDENAV_CMPS
        ],
        imports: [
            forms_1.FormsModule,
            material_1.MaterialModule,
            common_1.CommonModule,
            content_container_module_1.ContentContainerModule,
            router_1.RouterModule,
            collapse_module_1.CollapseModule
        ],
        exports: [
            ...index_1.SIDENAV_CMPS
        ]
    })
], SideNavModule);
exports.SideNavModule = SideNavModule;
//# sourceMappingURL=side-nav.module.js.map