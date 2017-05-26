import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-item',
  templateUrl: './error-item.component.html',
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
