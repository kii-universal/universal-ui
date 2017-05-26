"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const rxjs_1 = require("rxjs");
const confirm_modal_component_1 = require("./confirm-modal.component");
let ConfirmModal = class ConfirmModal {
    constructor(dialog) {
        this.dialog = dialog;
        this.defaultConfig = {
            width: '300px',
        };
    }
    open(options = {}) {
        let dialogConfig = new material_1.MdDialogConfig();
        Object.assign(dialogConfig, this.defaultConfig, options.dialog || {});
        let confirmConfig = options.confirmConfig || {};
        confirmConfig.message = options.message;
        dialogConfig.data = confirmConfig;
        let okSubscriber;
        let cancelSubscriber;
        let failureSubscriber;
        let okObservable = new rxjs_1.Observable((subscriber) => {
            okSubscriber = subscriber;
        });
        let failureObservable = new rxjs_1.Observable((subscriber) => {
            failureSubscriber = subscriber;
        });
        let cancelObservable = new rxjs_1.Observable((subscriber) => {
            cancelSubscriber = subscriber;
        });
        let dialog = this.dialog.open(confirm_modal_component_1.ConfirmModalComponent, dialogConfig);
        let result = new rxjs_1.Observable((subscriber) => {
            dialog.componentInstance.ok.subscribe(() => {
                if (options.callback) {
                    let callbackResult = options.callback();
                    if (callbackResult instanceof Promise) {
                        dialog.componentInstance.state = 'Loading';
                        callbackResult
                            .then(() => {
                            dialog.componentInstance.state = 'Default';
                            subscriber.next('SUCCESS');
                        })
                            .catch(() => {
                            dialog.componentInstance.state = 'Default';
                            if (failureSubscriber) {
                                failureSubscriber.next();
                            }
                        });
                    }
                    else {
                        subscriber.next('SUCCESS');
                    }
                }
                else {
                    subscriber.next('SUCCESS');
                }
            });
            dialog.componentInstance.cancel.subscribe(() => {
                subscriber.next('CANCEL');
            });
        });
        dialog.afterClosed().subscribe(() => {
            if (cancelSubscriber) {
                cancelSubscriber.next();
            }
        });
        result.subscribe((r) => {
            switch (r) {
                case 'SUCCESS':
                    if (okSubscriber) {
                        okSubscriber.next();
                        dialog.close();
                    }
                    break;
                case 'CANCEL':
                    dialog.close();
                    break;
                default:
                    break;
            }
        });
        return {
            ok: okObservable,
            cancel: cancelObservable,
            failure: failureObservable,
            close: () => {
                dialog.close();
            }
        };
    }
};
ConfirmModal = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [material_1.MdDialog])
], ConfirmModal);
exports.ConfirmModal = ConfirmModal;
//# sourceMappingURL=confirm-modal.service.js.map