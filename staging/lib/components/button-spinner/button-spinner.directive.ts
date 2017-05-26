import { AfterViewInit, HostBinding } from '@angular/core';
import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef
} from '@angular/core';

const SpinnerNode = `
  <div class="spinner-wrapper">
    <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
  </div>
`;

@Directive({
  selector: '[md-button][button-spinner]',
  host: {
    '[disabled]': 'disabled'
  }
})
export class CMButtonSpinner implements OnChanges, AfterViewInit {

  public disabled: boolean;

  @Input()
  public processing: boolean;

  private hostEle: HTMLButtonElement;
  private spinnerNode: HTMLDivElement;

  constructor(
    private ele: ElementRef
  ) {
    this.hostEle = this.ele.nativeElement;
  }

  public ngOnChanges(changes: SimpleChanges) {
    this._toggleSpinner();
  }

  public ngAfterViewInit() {
    this.hostEle.insertAdjacentHTML('beforeEnd', SpinnerNode);
    this.spinnerNode = <HTMLDivElement> this.hostEle.querySelector('.spinner-wrapper');
    this._toggleSpinner();
  }

  private _toggleSpinner() {
    this.disabled = this.processing;
    if (this.processing) {
      this._showSpinner();
    } else {
      this._hideSpinner();
    }
  }

  private _showSpinner() {
    if (!!this.spinnerNode && !this.spinnerNode.classList.contains('active')) {
      this.spinnerNode.classList.add('active');
    }
  }

  private _hideSpinner() {
    if (!!this.spinnerNode && this.spinnerNode.classList.contains('active')) {
      this.spinnerNode.classList.remove('active');
    }
  }
}
