import { AfterViewInit } from '@angular/core';
import { OnChanges, SimpleChanges, ElementRef } from '@angular/core';
export declare class CMButtonSpinner implements OnChanges, AfterViewInit {
    private ele;
    disabled: boolean;
    processing: boolean;
    private hostEle;
    private spinnerNode;
    constructor(ele: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    private _toggleSpinner();
    private _showSpinner();
    private _hideSpinner();
}
