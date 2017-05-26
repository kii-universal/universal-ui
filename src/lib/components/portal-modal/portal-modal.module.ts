import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { PortalModalCmp } from './portal-modal.component';
import { PortalModal } from './portal-modal.service';
import { ContentContainerModule } from '../content-container/content-container.module';

@NgModule({
  declarations: [
    PortalModalCmp,
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    ContentContainerModule
  ],
  entryComponents: [PortalModalCmp],
  providers: [PortalModal]
})
export class PortalModalModule {
}
