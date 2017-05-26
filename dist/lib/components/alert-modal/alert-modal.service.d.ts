import { MdSnackBar } from '@angular/material';
export declare class AlertModal {
    snackBar: MdSnackBar;
    constructor(snackBar: MdSnackBar);
    success(message: string, action?: string, duration?: number): void;
    failure(message: string, action?: string, duration?: number): void;
    private open(message, action, duration, extraClass);
}
