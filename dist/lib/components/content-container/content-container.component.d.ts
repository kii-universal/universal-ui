import { ElementRef, AfterViewInit } from '@angular/core';
import { ToolbarSubTitle } from './toolbar-sub-title.component';
export declare class ContentContainer implements AfterViewInit {
    private ele;
    subTitleCmp: ToolbarSubTitle;
    constructor(ele: ElementRef);
    ngAfterViewInit(): void;
}
