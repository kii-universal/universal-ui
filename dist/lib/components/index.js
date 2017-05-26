"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alert_modal_service_1 = require("./alert-modal/alert-modal.service");
const confirm_modal_service_1 = require("./confirm-modal/confirm-modal.service");
const content_container_module_1 = require("./content-container/content-container.module");
const portal_modal_module_1 = require("./portal-modal/portal-modal.module");
const error_controller_module_1 = require("./error-controller/error-controller.module");
const confirm_modal_module_1 = require("./confirm-modal/confirm-modal.module");
const side_nav_module_1 = require("./side-nav/side-nav.module");
const collapse_module_1 = require("./collapse/collapse.module");
const button_spinner_module_1 = require("./button-spinner/button-spinner.module");
const portal_layout_module_1 = require("./portal-layout/portal-layout.module");
exports.CUSTOM_PROVIDERS = [
    alert_modal_service_1.AlertModal,
    confirm_modal_service_1.ConfirmModal
];
exports.CUSTOM_MODULES = [
    content_container_module_1.ContentContainerModule,
    portal_modal_module_1.PortalModalModule,
    error_controller_module_1.ErrorControllerModule,
    confirm_modal_module_1.ConfirmModalModule,
    side_nav_module_1.SideNavModule,
    collapse_module_1.CollapseModule,
    button_spinner_module_1.CMButtonSpinnerModule,
    portal_layout_module_1.PortalLayoutModule,
];
//# sourceMappingURL=index.js.map