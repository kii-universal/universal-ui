"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
let ConfirmModalComponent = class ConfirmModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.ok = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.state = 'Default';
        let config = dialogRef._containerInstance.dialogConfig.data;
        this._message = config.message;
        this._okText = config.okText || 'controls.ok';
        this._cancelText = config.cancelText || 'controls.cancel';
    }
    get okText() {
        return this._okText;
    }
    get cancelText() {
        return this._cancelText;
    }
    get message() {
        return this._message;
    }
};
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ConfirmModalComponent.prototype, "ok", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ConfirmModalComponent.prototype, "cancel", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], ConfirmModalComponent.prototype, "config", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], ConfirmModalComponent.prototype, "state", void 0);
ConfirmModalComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'confirm-modal',
        template: '<div class="modal-container"><md-dialog-content><p>{{message}}</p></md-dialog-content><div class="modal-footer"><ng-container *ngIf="state===\'Default\'"><div class="btn-item"><label><button md-icon-button (click)="ok.emit()"><md-icon>check</md-icon></button> {{okText}}</label></div><div class="btn-item"><label><button md-icon-button md-dialog-close><md-icon>close</md-icon></button> {{cancelText}}</label></div></ng-container><ng-container *ngIf="state!==\'Default\'"><div class="btn-item"><md-spinner></md-spinner></div></ng-container></div></div>',
        styles: [`md-dialog-content {  text-align: center; }.modal-footer {  display: flex;  justify-content: center;  align-content: center; }.btn-item {  width: 85px;  font-size: 13px; }  .btn-item md-icon {    width: 40px;    height: 40px;    font-size: 23px;    text-align: center;    line-height: 40px; }    .btn-item md-icon .mat-icon {      line-height: 40px !important; }md-spinner {  margin: 0px auto;  width: 40px;  height: 40px; }`]
    }),
    tslib_1.__metadata("design:paramtypes", [material_1.MdDialogRef])
], ConfirmModalComponent);
exports.ConfirmModalComponent = ConfirmModalComponent;
//# sourceMappingURL=confirm-modal.component.js.map