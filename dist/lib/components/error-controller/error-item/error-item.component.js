"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let ErrorItemCmp = class ErrorItemCmp {
    get show() {
        if (!this.control || !this.control.errors) {
            return false;
        }
        return !!this.control.errors[this.errorName];
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], ErrorItemCmp.prototype, "errorName", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormControl)
], ErrorItemCmp.prototype, "control", void 0);
ErrorItemCmp = tslib_1.__decorate([
    core_1.Component({
        selector: 'error-item',
        template: '<p class="error-message" [class.has-error]="show"><ng-content></ng-content></p>',
    })
], ErrorItemCmp);
exports.ErrorItemCmp = ErrorItemCmp;
//# sourceMappingURL=error-item.component.js.map