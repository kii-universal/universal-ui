import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-item',
  template:'<p class="error-message" [class.has-error]="show"><ng-content></ng-content></p>',
})
export class ErrorItemCmp {
  @Input() public errorName: string;
  @Input() public control: FormControl;

  get show(): boolean {
    if (!this.control || !this.control.errors) {
      return false;
    }
    return !!this.control.errors[this.errorName];
  }
}
