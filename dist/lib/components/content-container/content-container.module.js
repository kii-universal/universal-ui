"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const content_container_component_1 = require("./content-container.component");
const toolbar_sub_title_component_1 = require("./toolbar-sub-title.component");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const common_1 = require("@angular/common");
let ContentContainerModule = class ContentContainerModule {
};
ContentContainerModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            content_container_component_1.ContentContainer,
            toolbar_sub_title_component_1.ToolbarSubTitle
        ],
        imports: [
            forms_1.FormsModule,
            material_1.MaterialModule,
            common_1.CommonModule,
        ],
        exports: [
            content_container_component_1.ContentContainer,
            toolbar_sub_title_component_1.ToolbarSubTitle
        ]
    })
], ContentContainerModule);
exports.ContentContainerModule = ContentContainerModule;
//# sourceMappingURL=content-container.module.js.map