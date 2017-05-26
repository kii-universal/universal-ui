import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  Input,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[mcCollapse]',
  exportAs: 'mcCollapse',
  /* tslint:disable-next-line */
  host: {'[class.collapse]': 'true'}
})
export class MCCollapse {
  /** This event fires as soon as content collapses */
  @Output() public collapsed: EventEmitter<any> = new EventEmitter();
  /** This event fires as soon as content becomes visible */
  @Output() public expanded: EventEmitter<any> = new EventEmitter();

  // shown
  @HostBinding('class.in')
  public isExpanded: boolean = true;

  // hidden
  @HostBinding('attr.aria-hidden')
  public isCollapsed: boolean = false;
  // stale state
  @HostBinding('class.collapse')
  public isCollapse: boolean = true;
  // animation state
  @HostBinding('class.collapsing')
  public isCollapsing: boolean = false;

  /** A flag indicating visibility of content (shown or hidden) */
  @Input()
  public set mcCollapse(value: boolean) {
    this.isExpanded = value;
    this.toggle();
  }

  public get mcCollapse(): boolean {
    return this.isExpanded;
  }

  public constructor(
    private _el: ElementRef,
    private _renderer: Renderer) {
    this._el = _el;
    this._renderer = _renderer;
  }

  /** allows to manually toggle content visibility */
  public toggle(): void {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  /** allows to manually hide content */
  public hide(): void {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = false;
    this.isCollapsed = true;

    this.isCollapse = true;
    this.isCollapsing = false;

    this.containerHeight = '0px';
    this.collapsed.emit(this);
  }

  /** allows to manually show collapsed content */
  public show(): void {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = true;
    this.isCollapsed = false;

    this.isCollapse = true;
    this.isCollapsing = false;
    this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
    this.containerHeight = this.containerScrollheight + 'px';
    this.expanded.emit(this);
  }

  public get containerScrollheight() {
    let container: HTMLDivElement = this._el.nativeElement;
    return container.scrollHeight;
  }

  public set containerHeight(height: string) {
    let container: HTMLDivElement = this._el.nativeElement;
    container.style.height = height;
  }
}
