import { MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmConifg } from './confirm-modal.component';
export interface ConfirmOptions {
    callback?: () => Promise<any>;
    message?: string;
    confirmConfig?: ConfirmConifg;
    dialog?: MdDialogConfig;
}
export declare type StateType = 'SUCCESS' | 'CANCEL';
export declare class ConfirmModal {
    private dialog;
    private defaultConfig;
    constructor(dialog: MdDialog);
    open(options?: ConfirmOptions): {
        ok: Observable<any>;
        cancel: Observable<any>;
        failure: Observable<any>;
        close: () => void;
    };
}
