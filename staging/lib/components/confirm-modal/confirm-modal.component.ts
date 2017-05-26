import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmModal, StateType } from './confirm-modal.service';

import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

export interface ConfirmConifg {
  message?: string;
  okText?: string;
  cancelText?: string;
}

export type LoadingState = 'Loading' | 'Default';

@Component({
  selector: 'confirm-modal',
  template:'<div class="modal-container"><md-dialog-content><p>{{message}}</p></md-dialog-content><div class="modal-footer"><ng-container *ngIf="state===\'Default\'"><div class="btn-item"><label><button md-icon-button (click)="ok.emit()"><md-icon>check</md-icon></button> {{okText}}</label></div><div class="btn-item"><label><button md-icon-button md-dialog-close><md-icon>close</md-icon></button> {{cancelText}}</label></div></ng-container><ng-container *ngIf="state!==\'Default\'"><div class="btn-item"><md-spinner></md-spinner></div></ng-container></div></div>',
  styles: [`md-dialog-content {  text-align: center; }.modal-footer {  display: flex;  justify-content: center;  align-content: center; }.btn-item {  width: 85px;  font-size: 13px; }  .btn-item md-icon {    width: 40px;    height: 40px;    font-size: 23px;    text-align: center;    line-height: 40px; }    .btn-item md-icon .mat-icon {      line-height: 40px !important; }md-spinner {  margin: 0px auto;  width: 40px;  height: 40px; }`]
})
export class ConfirmModalComponent {

  @Output()
  public ok: EventEmitter<StateType> = new EventEmitter();

  @Output()
  public cancel: EventEmitter<StateType> = new EventEmitter();

  @Input()
  public config: ConfirmConifg;

  @Input()
  public state: LoadingState = 'Default';

  private _okText: string;
  private _cancelText: string;
  private _message: string;

  constructor(
    public dialogRef: MdDialogRef<ConfirmModalComponent>
  ) {
    let config: ConfirmConifg = dialogRef._containerInstance.dialogConfig.data;
    this._message = config.message;
    this._okText = config.okText || 'controls.ok';
    this._cancelText = config.cancelText || 'controls.cancel';
  }

  get okText(): string {
    return this._okText;
  }

  get cancelText(): string {
    return this._cancelText;
  }

  get message(): string {
    return this._message;
  }

}
