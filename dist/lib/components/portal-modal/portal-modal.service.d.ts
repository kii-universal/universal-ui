import { MdDialog, ComponentType } from '@angular/material';
export declare class PortalModal {
    private dialog;
    constructor(dialog: MdDialog);
    show<T>(cmpType: ComponentType<T>, data?: {}): T;
    private findParent(ele, className);
}
