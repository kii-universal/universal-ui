"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const SpinnerNode = `
  <div class="spinner-wrapper">
    <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
  </div>
`;
let CMButtonSpinner = class CMButtonSpinner {
    constructor(ele) {
        this.ele = ele;
        this.hostEle = this.ele.nativeElement;
    }
    ngOnChanges(changes) {
        this._toggleSpinner();
    }
    ngAfterViewInit() {
        this.hostEle.insertAdjacentHTML('beforeEnd', SpinnerNode);
        this.spinnerNode = this.hostEle.querySelector('.spinner-wrapper');
        this._toggleSpinner();
    }
    _toggleSpinner() {
        this.disabled = this.processing;
        if (this.processing) {
            this._showSpinner();
        }
        else {
            this._hideSpinner();
        }
    }
    _showSpinner() {
        if (!!this.spinnerNode && !this.spinnerNode.classList.contains('active')) {
            this.spinnerNode.classList.add('active');
        }
    }
    _hideSpinner() {
        if (!!this.spinnerNode && this.spinnerNode.classList.contains('active')) {
            this.spinnerNode.classList.remove('active');
        }
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], CMButtonSpinner.prototype, "processing", void 0);
CMButtonSpinner = tslib_1.__decorate([
    core_1.Directive({
        selector: '[md-button][button-spinner]',
        host: {
            '[disabled]': 'disabled'
        }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], CMButtonSpinner);
exports.CMButtonSpinner = CMButtonSpinner;
//# sourceMappingURL=button-spinner.directive.js.map