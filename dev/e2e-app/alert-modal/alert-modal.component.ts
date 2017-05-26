import { Component } from '@angular/core';
import { AlertModal } from '../../../src/lib/components/alert-modal/alert-modal.service';

@Component({
  selector: 'alert-modal-e2e',
  template: `
    <button md-button (click)="showModal()" color="primary">Show Modal</button>
  `
})
export class AlertModalE2E {
  constructor(
    private alertModal: AlertModal
  ) { }

  public showModal() {
    this.alertModal.success('success message');
  }
}
