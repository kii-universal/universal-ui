import { EventEmitter, ElementRef } from '@angular/core';
import { MdDialogRef, ComponentType } from '@angular/material';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
export declare class PortalModalCmp {
    viewElement: ElementRef;
    private vcRef;
    private _cfr;
    private _mdr;
    back: EventEmitter<void>;
    private template;
    constructor(viewElement: ElementRef, vcRef: ViewContainerRef, _cfr: ComponentFactoryResolver, _mdr: MdDialogRef<any>);
    addCmp<T>(cmpType: ComponentType<T>, data?: any): T;
}
