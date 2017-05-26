"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const portal_modal_component_1 = require("./portal-modal.component");
let PortalModal = class PortalModal {
    constructor(dialog) {
        this.dialog = dialog;
    }
    show(cmpType, data = {}) {
        let dialogConfig = new material_1.MdDialogConfig();
        let cmpRef = this.dialog.open(portal_modal_component_1.PortalModalCmp, dialogConfig);
        let portalModalCmp = cmpRef.componentInstance;
        let viewElement = portalModalCmp.viewElement.nativeElement;
        let panEle = this.findParent(viewElement, 'cdk-overlay-pane');
        let dialogContainerEle = viewElement.parentElement;
        dialogContainerEle.classList.add('full-screen');
        panEle.classList.add('full-screen');
        let cmp = portalModalCmp.addCmp(cmpType, data);
        portalModalCmp.back.subscribe(() => {
            cmpRef.close();
        });
        return cmp;
    }
    findParent(ele, className) {
        return ele.classList.contains(className) ? ele : this.findParent(ele.parentElement, className);
    }
};
PortalModal = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [material_1.MdDialog])
], PortalModal);
exports.PortalModal = PortalModal;
//# sourceMappingURL=portal-modal.service.js.map