import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ContentChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorItemCmp } from '../error-item/error-item.component';

@Component({
  selector: 'error-container',
  templateUrl: './error-container.component.html',
})
export class ErrorContainerCmp implements OnChanges, AfterViewInit {

  @Input() public control: FormControl;
  @Input() public show: boolean;

  @ContentChildren(ErrorItemCmp)
  public errorItems: QueryList<ErrorItemCmp>;

  public ngOnChanges(changes: SimpleChanges) {
    if (
      !changes['control'] ||
      changes['control'].currentValue === changes['control'].previousValue
      || !this.errorItems
    ) {
      return;
    }
    this.errorItems.toArray()
      .forEach((item) => {
        item.control = changes['control'].currentValue;
      });
  }

  public ngAfterViewInit() {
    if (!this.errorItems) {
      return;
    }
    this.errorItems.toArray()
      .forEach((item) => {
        // avoid change detection
        setTimeout(() => {
          item.control = this.control;
        });
      });
  }
}
