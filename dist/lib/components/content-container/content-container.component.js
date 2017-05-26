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
  `,
        styles: [`cm-content-container {  top: 0px;  bottom: 0px;  left: 0px;  right: 0px;  position: absolute;  display: block; }  cm-content-container[padding] .cm-content-container-inner {    padding: 20px; }  cm-content-container[no-top] .cm-content-container-inner.has-sub-title {    margin-top: 49px; }  cm-content-container .cm-content-container-inner {    display: block;    overflow: auto;    position: absolute;    left: 0px;    right: 0px;    top: 0px;    bottom: 0px; }    cm-content-container .cm-content-container-inner.has-sub-title {      margin-top: 48px; }    cm-content-container .cm-content-container-inner > .content-wrap {      width: 100%;      height: 100%; }  cm-content-container cm-toolbar-sub-title md-toolbar {    position: fixed;    z-index: 1;    width: 100%;    top: 48px; }  cm-content-container cm-toolbar-sub-title .sub-title-container {    flex: 1;    position: absolute;    text-align: left; }  cm-content-container cm-toolbar-sub-title .sub-title-container h2 {    font-size: 1rem;    color: #3f5269; }  cm-content-container cm-toolbar-sub-title .cmp-container {    flex: 1;    position: relative; }  cm-content-container[no-top] cm-toolbar-sub-title md-toolbar {    top: 0px; }`]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], ContentContainer);
exports.ContentContainer = ContentContainer;
//# sourceMappingURL=content-container.component.js.map