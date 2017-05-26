import { OnChanges, SimpleChanges, QueryList, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorItemCmp } from '../error-item/error-item.component';
export declare class ErrorContainerCmp implements OnChanges, AfterViewInit {
    control: FormControl;
    show: boolean;
    errorItems: QueryList<ErrorItemCmp>;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
