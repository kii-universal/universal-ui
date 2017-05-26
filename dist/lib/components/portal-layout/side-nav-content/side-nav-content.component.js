"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let SideNavContentCmp = class SideNavContentCmp {
    constructor() {
        this.toggleMenu = new core_1.EventEmitter();
    }
    menuToggleClick() {
        this.toggleMenu.emit();
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], SideNavContentCmp.prototype, "rootSection", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], SideNavContentCmp.prototype, "menuVisible", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], SideNavContentCmp.prototype, "toggleMenu", void 0);
SideNavContentCmp = tslib_1.__decorate([
    core_1.Component({
        selector: 'side-nav-content',
        template: '<button class="menu-toggle-btn" md-icon-button (click)="toggleMenu.emit()"><md-icon class="menu-toggle" color="primary" [class.active]="menuVisible">menu</md-icon></button><cm-sidenav-list class="nav-container" [open]="menuVisible" [navRoot]="rootSection"></cm-sidenav-list>',
    })
], SideNavContentCmp);
exports.SideNavContentCmp = SideNavContentCmp;
//# sourceMappingURL=side-nav-content.component.js.map