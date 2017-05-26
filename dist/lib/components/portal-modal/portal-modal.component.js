"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const portal_modal_ref_type_1 = require("./portal-modal-ref.type");
const material_1 = require("@angular/material");
const core_2 = require("@angular/core");
let PortalModalCmp = class PortalModalCmp {
    constructor(viewElement, vcRef, _cfr, _mdr) {
        this.viewElement = viewElement;
        this.vcRef = vcRef;
        this._cfr = _cfr;
        this._mdr = _mdr;
        this.back = new core_1.EventEmitter();
    }
    addCmp(cmpType, data) {
        let componentFactory = this._cfr.resolveComponentFactory(cmpType);
        let valueProvider = {
            provide: portal_modal_ref_type_1.PortalModalRef,
            useValue: new portal_modal_ref_type_1.PortalModalRef(data)
        };
        let providers = core_1.ReflectiveInjector.resolve([valueProvider]);
        let injector = core_1.ReflectiveInjector.fromResolvedProviders(providers, this.vcRef.parentInjector);
        let cmpRef = this.template.createComponent(componentFactory, 0, injector);
        return cmpRef.instance;
    }
};
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], PortalModalCmp.prototype, "back", void 0);
tslib_1.__decorate([
    core_2.ViewChild('template', { read: core_2.ViewContainerRef }),
    tslib_1.__metadata("design:type", core_2.ViewContainerRef)
], PortalModalCmp.prototype, "template", void 0);
PortalModalCmp = tslib_1.__decorate([
    core_2.Component({
        selector: 'portal-modal',
        template: `
    <cm-content-container no-top>
      <cm-toolbar-sub-title>
        <button class="back-btn" md-icon-button (click)="back.emit()">
          <md-icon>arrow_back</md-icon>
        </button>
      </cm-toolbar-sub-title>
      <div class="modal-content">
        <div #template></div>
      </div>
    </cm-content-container>
  `,
        styles: [`
    cm-toolbar-sub-title .back-btn {
      border-radius: 50%;
      background: #f2f6f7;
    }
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
        core_2.ViewContainerRef,
        core_2.ComponentFactoryResolver,
        material_1.MdDialogRef])
], PortalModalCmp);
exports.PortalModalCmp = PortalModalCmp;
//# sourceMappingURL=portal-modal.component.js.map