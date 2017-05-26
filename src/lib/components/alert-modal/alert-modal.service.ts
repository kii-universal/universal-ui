import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class AlertModal {

  constructor(
    public snackBar: MdSnackBar,
  ) { }

  public success(message: string, action?: string, duration?: number) {
    this.open(message, action, duration, 'success');
  }

  public failure(message: string, action?: string, duration?: number) {
    this.open(message, action, duration, 'failure');
  }

  private open(
    message: string,
    action: string = 'OK',
    duration: number = 2000,
    extraClass: string
  ) {
    this.snackBar.open(message, action, {
      duration,
    });
  }
}
