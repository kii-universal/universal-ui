"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let MCCollapse = class MCCollapse {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new core_1.EventEmitter();
        /** This event fires as soon as content becomes visible */
        this.expanded = new core_1.EventEmitter();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        this._el = _el;
        this._renderer = _renderer;
    }
    /** A flag indicating visibility of content (shown or hidden) */
    set mcCollapse(value) {
        this.isExpanded = value;
        this.toggle();
    }
    get mcCollapse() {
        return this.isExpanded;
    }
    /** allows to manually toggle content visibility */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /** allows to manually hide content */
    hide() {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.containerHeight = '0px';
        this.collapsed.emit(this);
    }
    /** allows to manually show collapsed content */
    show() {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
        this.containerHeight = this.containerScrollheight + 'px';
        this.expanded.emit(this);
    }
    get containerScrollheight() {
        let container = this._el.nativeElement;
        return container.scrollHeight;
    }
    set containerHeight(height) {
        let container = this._el.nativeElement;
        container.style.height = height;
    }
};
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], MCCollapse.prototype, "collapsed", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], MCCollapse.prototype, "expanded", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.in'),
    tslib_1.__metadata("design:type", Boolean)
], MCCollapse.prototype, "isExpanded", void 0);
tslib_1.__decorate([
    core_1.HostBinding('attr.aria-hidden'),
    tslib_1.__metadata("design:type", Boolean)
], MCCollapse.prototype, "isCollapsed", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.collapse'),
    tslib_1.__metadata("design:type", Boolean)
], MCCollapse.prototype, "isCollapse", void 0);
tslib_1.__decorate([
    core_1.HostBinding('class.collapsing'),
    tslib_1.__metadata("design:type", Boolean)
], MCCollapse.prototype, "isCollapsing", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], MCCollapse.prototype, "mcCollapse", null);
MCCollapse = tslib_1.__decorate([
    core_1.Directive({
        selector: '[mcCollapse]',
        exportAs: 'mcCollapse',
        /* tslint:disable-next-line */
        host: { '[class.collapse]': 'true' }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], MCCollapse);
exports.MCCollapse = MCCollapse;
//# sourceMappingURL=collapse.directive.js.map