import { Injectable, OnChanges, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig, ComponentType } from '@angular/material';
import { PortalModalCmp } from './portal-modal.component';

@Injectable()
export class PortalModal {

  constructor(
    private dialog: MdDialog
  ) { }

  public show<T>(cmpType: ComponentType<T>, data = {}) {
    let dialogConfig = new MdDialogConfig();
    let cmpRef = this.dialog.open(PortalModalCmp, dialogConfig);
    let portalModalCmp = cmpRef.componentInstance;

    let viewElement: HTMLElement = portalModalCmp.viewElement.nativeElement;
    let panEle = this.findParent(viewElement, 'cdk-overlay-pane');
    let dialogContainerEle = viewElement.parentElement;

    dialogContainerEle.classList.add('full-screen');
    panEle.classList.add('full-screen');

    let cmp = portalModalCmp.addCmp(cmpType, data);

    portalModalCmp.back.subscribe(() => {
      cmpRef.close();
    });

    return cmp;
  }

  private findParent(ele: HTMLElement, className: string): HTMLElement {
    return ele.classList.contains(className) ? ele : this.findParent(ele.parentElement, className);
  }

}
