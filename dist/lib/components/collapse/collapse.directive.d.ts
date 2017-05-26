import { EventEmitter, ElementRef, Renderer } from '@angular/core';
export declare class MCCollapse {
    private _el;
    private _renderer;
    /** This event fires as soon as content collapses */
    collapsed: EventEmitter<any>;
    /** This event fires as soon as content becomes visible */
    expanded: EventEmitter<any>;
    isExpanded: boolean;
    isCollapsed: boolean;
    isCollapse: boolean;
    isCollapsing: boolean;
    /** A flag indicating visibility of content (shown or hidden) */
    mcCollapse: boolean;
    constructor(_el: ElementRef, _renderer: Renderer);
    /** allows to manually toggle content visibility */
    toggle(): void;
    /** allows to manually hide content */
    hide(): void;
    /** allows to manually show collapsed content */
    show(): void;
    readonly containerScrollheight: number;
    containerHeight: string;
}
