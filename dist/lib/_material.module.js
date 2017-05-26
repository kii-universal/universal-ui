"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const MAT_MODULES = [
    material_1.MdAutocompleteModule,
    material_1.MdButtonModule,
    material_1.MdButtonToggleModule,
    material_1.MdCardModule,
    material_1.MdCheckboxModule,
    material_1.MdChipsModule,
    material_1.MdDialogModule,
    material_1.MdGridListModule,
    material_1.MdIconModule,
    material_1.MdInputModule,
    material_1.MdListModule,
    material_1.MdMenuModule,
    material_1.MdProgressBarModule,
    material_1.MdRadioModule,
    material_1.MdSelectModule,
    material_1.MdSidenavModule,
    material_1.MdSlideToggleModule,
    material_1.MdSliderModule,
    material_1.MdSnackBarModule,
    material_1.MdTabsModule,
    material_1.MdToolbarModule,
    material_1.MdTooltipModule,
];
let _MaterialModule = class _MaterialModule {
};
_MaterialModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: MAT_MODULES,
        exports: MAT_MODULES
    })
], _MaterialModule);
exports._MaterialModule = _MaterialModule;
//# sourceMappingURL=_material.module.js.map