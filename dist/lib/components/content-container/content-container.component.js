"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const toolbar_sub_title_component_1 = require("./toolbar-sub-title.component");
let ContentContainer = class ContentContainer {
    constructor(ele) {
        this.ele = ele;
    }
    ngAfterViewInit() {
        if (!!this.subTitleCmp) {
            this.ele.nativeElement.getElementsByClassName('cm-content-container-inner')[0]
                .classList.add('has-sub-title');
        }
    }
};
tslib_1.__decorate([
    core_1.ContentChild(toolbar_sub_title_component_1.ToolbarSubTitle),
    tslib_1.__metadata("design:type", toolbar_sub_title_component_1.ToolbarSubTitle)
], ContentContainer.prototype, "subTitleCmp", void 0);
ContentContainer = tslib_1.__decorate([
    core_1.Component({
        selector: 'cm-content-container',
        template: `
    <ng-content select="cm-toolbar-sub-title"></ng-content>
    <div class="cm-content-container-inner">
      <div class="content-wrap">
        <ng-content></ng-content>
      </div>
    </div>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], ContentContainer);
exports.ContentContainer = ContentContainer;
//# sourceMappingURL=content-container.component.js.map