import { Injectable } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Observable, Subscriber } from 'rxjs';

import { ConfirmModalComponent, ConfirmConifg } from './confirm-modal.component';

export interface ConfirmOptions {
  callback?: () => Promise<any>;
  message?: string;
  confirmConfig?: ConfirmConifg;
  dialog?: MdDialogConfig;
}

export type StateType = 'SUCCESS' | 'CANCEL';

@Injectable()
export class ConfirmModal {

  private defaultConfig: MdDialogConfig = {
    width: '300px',
  };

  constructor(
    private dialog: MdDialog
  ) { }

  public open(options: ConfirmOptions = {}) {
    let dialogConfig = new MdDialogConfig();
    Object.assign(dialogConfig, this.defaultConfig, options.dialog || {});
    let confirmConfig: ConfirmConifg = options.confirmConfig || {};
    confirmConfig.message = options.message;
    dialogConfig.data = confirmConfig;

    let okSubscriber: Subscriber<any>;
    let cancelSubscriber: Subscriber<any>;
    let failureSubscriber: Subscriber<any>;

    let okObservable = new Observable((subscriber: Subscriber<any>) => {
      okSubscriber = subscriber;
    });

    let failureObservable = new Observable((subscriber: Subscriber<any>) => {
      failureSubscriber = subscriber;
    });

    let cancelObservable = new Observable((subscriber: Subscriber<any>) => {
      cancelSubscriber = subscriber;
    });

    let dialog = this.dialog.open(ConfirmModalComponent, dialogConfig);

    let result = new Observable((subscriber: Subscriber<StateType>) => {
      dialog.componentInstance.ok.subscribe(() => {
        if (options.callback) {
          let callbackResult = options.callback();
          if (callbackResult instanceof Promise) {
            dialog.componentInstance.state = 'Loading';
            callbackResult
              .then(() => {
                dialog.componentInstance.state = 'Default';
                subscriber.next('SUCCESS');
              })
              .catch(() => {
                dialog.componentInstance.state = 'Default';
                if (failureSubscriber) {
                  failureSubscriber.next();
                }
              });
          } else {
            subscriber.next('SUCCESS');
          }
        } else {
          subscriber.next('SUCCESS');
        }
      });

      dialog.componentInstance.cancel.subscribe(() => {
        subscriber.next('CANCEL');
      });
    });

    dialog.afterClosed().subscribe(() => {
      if (cancelSubscriber) {
        cancelSubscriber.next();
      }
    });

    result.subscribe((r) => {
      switch (r) {
        case 'SUCCESS':
          if (okSubscriber) {
            okSubscriber.next();
            dialog.close();
          }
          break;
        case 'CANCEL':
          dialog.close();
          break;
        default:
          break;
      }
    });

    return {
      ok: okObservable,
      cancel: cancelObservable,
      failure: failureObservable,
      close: () => {
        dialog.close();
      }
    };
  }
}
