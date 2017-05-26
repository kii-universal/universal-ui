import {
  OverlayContainer, FullscreenOverlayContainer, MdGridListModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdTabsModule, MdRadioModule, MdSlideToggleModule, MdMenuModule,
  MdListModule, MdInputModule, MdIconModule, MdDialogModule, MdCheckboxModule, MdButtonModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { E2E_APP_ROUTES } from './e2e-app/e2e-app.router';
import { E2EApp, Home } from './e2e-app/e2e-app.component';
import { MatCustomModule } from '../../src/';
import { AlertModalE2E } from './alert-modal/alert-modal.component';
/**
 * NgModule that contains all Material modules that are required to serve the e2e-app.
 */
@NgModule({
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdTabsModule
  ]
})
export class E2eMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(E2E_APP_ROUTES),
    E2eMaterialModule,
    MatCustomModule
  ],
  declarations: [
    AlertModalE2E,
    Home,
    E2EApp
  ],
  bootstrap: [E2EApp],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
})
export class E2eAppModule { }