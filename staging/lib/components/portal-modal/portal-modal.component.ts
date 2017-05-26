import {
  Output,
  EventEmitter,
  ReflectiveInjector,
  ValueProvider,
  ElementRef
} from '@angular/core';
import { PortalModalRef } from './portal-modal-ref.type';
import {
  MdDialogRef,
  ComponentType
} from '@angular/material';
import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  Type
} from '@angular/core';

@Component({
  selector: 'portal-modal',
  template: `
    <cm-content-container no-top>
      <cm-toolbar-sub-title>
        <button class="back-btn" md-icon-button (click)="back.emit()">
          <md-icon>arrow_back</md-icon>
        </button>
      </cm-toolbar-sub-title>
      <div class="modal-content">
        <div #template></div>
      </div>
    </cm-content-container>
  `,
  styles: [`
    cm-toolbar-sub-title .back-btn {
      border-radius: 50%;
      background: #f2f6f7;
    }
  `]
})
export class PortalModalCmp {

  @Output()
  public back: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('template', { read: ViewContainerRef })
  private template: ViewContainerRef;

  constructor(
    public viewElement: ElementRef,
    private vcRef: ViewContainerRef,
    private _cfr: ComponentFactoryResolver,
    private _mdr: MdDialogRef<any>
  ) { }

  public addCmp<T>(cmpType: ComponentType<T>, data?): T {
    let componentFactory = this._cfr.resolveComponentFactory(cmpType);
    let valueProvider: ValueProvider = {
      provide: PortalModalRef,
      useValue: new PortalModalRef(data)
    };
    let providers = ReflectiveInjector.resolve([valueProvider]);
    let injector = ReflectiveInjector.fromResolvedProviders(providers, this.vcRef.parentInjector);
    let cmpRef = this.template.createComponent(componentFactory, 0, injector);
    return cmpRef.instance;
  }
}
