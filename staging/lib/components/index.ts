import { AlertModal } from './alert-modal/alert-modal.service';
import { ConfirmModal } from './confirm-modal/confirm-modal.service';
import { ContentContainerModule } from './content-container/content-container.module';
import { PortalModalModule } from './portal-modal/portal-modal.module';
import { ErrorControllerModule } from './error-controller/error-controller.module';
import { ConfirmModalModule } from './confirm-modal/confirm-modal.module';
import { MCCollapse } from './collapse/collapse.directive';
import { SideNavModule } from './side-nav/side-nav.module';
import { CollapseModule } from './collapse/collapse.module';
import { CMButtonSpinnerModule } from './button-spinner/button-spinner.module';
import { PortalLayoutModule } from './portal-layout/portal-layout.module';

export const CUSTOM_PROVIDERS = [
  AlertModal,
  ConfirmModal
];

export const CUSTOM_MODULES = [
    ContentContainerModule,
    PortalModalModule,
    ErrorControllerModule,
    ConfirmModalModule,
    SideNavModule,
    CollapseModule,
    CMButtonSpinnerModule,
    PortalLayoutModule,
];
