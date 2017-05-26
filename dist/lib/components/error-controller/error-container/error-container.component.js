"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const error_item_component_1 = require("../error-item/error-item.component");
let ErrorContainerCmp = class ErrorContainerCmp {
    ngOnChanges(changes) {
        if (!changes['control'] ||
            changes['control'].currentValue === changes['control'].previousValue
            || !this.errorItems) {
            return;
        }
        this.errorItems.toArray()
            .forEach((item) => {
            item.control = changes['control'].currentValue;
        });
    }
    ngAfterViewInit() {
        if (!this.errorItems) {
            return;
        }
        this.errorItems.toArray()
            .forEach((item) => {
            // avoid change detection
            setTimeout(() => {
                item.control = this.control;
            });
        });
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormControl)
], ErrorContainerCmp.prototype, "control", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], ErrorContainerCmp.prototype, "show", void 0);
tslib_1.__decorate([
    core_1.ContentChildren(error_item_component_1.ErrorItemCmp),
    tslib_1.__metadata("design:type", core_1.QueryList)
], ErrorContainerCmp.prototype, "errorItems", void 0);
ErrorContainerCmp = tslib_1.__decorate([
    core_1.Component({
        selector: 'error-container',
        template: '<div class="error-container" [hidden]="!show"><ng-content></ng-content></div>',
    })
], ErrorContainerCmp);
exports.ErrorContainerCmp = ErrorContainerCmp;
//# sourceMappingURL=error-container.component.js.map