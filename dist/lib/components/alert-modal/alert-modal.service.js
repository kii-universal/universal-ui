"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
let AlertModal = class AlertModal {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    success(message, action, duration) {
        this.open(message, action, duration, 'success');
    }
    failure(message, action, duration) {
        this.open(message, action, duration, 'failure');
    }
    open(message, action = 'OK', duration = 2000, extraClass) {
        this.snackBar.open(message, action, {
            duration,
        });
    }
};
AlertModal = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [material_1.MdSnackBar])
], AlertModal);
exports.AlertModal = AlertModal;
//# sourceMappingURL=alert-modal.service.js.map