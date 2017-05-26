import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { PortalLayoutCmp } from './portal-layout.component';
import { SideNavContentCmp } from './side-nav-content/side-nav-content.component';
import { ToolbarCmp } from './toolbar/toolbar.component';
import { SideNavModule } from '../side-nav/side-nav.module';

@NgModule({
  declarations: [
    PortalLayoutCmp,
    SideNavContentCmp,
    ToolbarCmp,
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    SideNavModule,
  ],
  exports: [
    PortalLayoutCmp
  ]
})
export class PortalLayoutModule { }
