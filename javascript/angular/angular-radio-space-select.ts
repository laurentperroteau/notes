import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { noop } from '../../utils';

export const RadioComponentProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioComponent),
  multi: true,
};

interface RadioItem {
  label: string;
  value: any;
}

@Component({
  selector: 'fui-radio',
  template: `
    <div
      *ngFor="let item of radioItems"
      #radioElem
      (focus)="onFocus(item)"
      (blur)="onBlur()"
      (keyup.space)="onSpace($event)"
      (keydown.space)="onSpace($event, item)"
      tabindex="0"
      class="radio-item"
      [class.radio-item-marge]="radioPosition == 'horizontal' && isFirst">
      <label
        [class.checked]="value === item.value"
        [class.disabled]="radioIsDisabled"
        (click)="setValueOnClick(item.value)">
        {{ item.label }}
      </label>
    </div>
  `,
  providers: [RadioComponentProvider],
  encapsulation: ViewEncapsulation.None,
})
export class RadioComponent implements ControlValueAccessor {
  @Input() radioLabel: string;
  @Input() radioItems: RadioItem[] = [
    {
      label: 'Oui',
      value: true
    },
    {
      label: 'Non',
      value: false
    }
  ];
  @Input() radioIsRequired = true;
  @Input() radioIsValid = true;
  @Input() radioIsDisabled = false;

  @Input() set value(val: any) {
    this.writeValue(val);
  }
  get value(): any {
    return this._value;
  }
  private _value: any;
  onChange: (_: any) => void = noop;
  onTouched: (_: any) => void = noop;
  inputValue: any;

  currentFocusRadioItem: RadioItem;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this._value = value;
    this.onChange(value);
    this.inputValue = value;
  }

  setValueOnClick(value: any): void {
    if (!this.radioIsDisabled) {
      this.writeValue(value);
    }
  }

  onFocus(elem: RadioItem) {
    if (elem) {
      this.currentFocusRadioItem = elem;
    }
  }

  onBlur() {
    this.currentFocusRadioItem = null;
  }

  onSpace($event: Event, item: RadioItem) {
    if (this.currentFocusRadioItem && this.currentFocusRadioItem === item) {
      $event.preventDefault();
      this.setValueOnClick(item.value);
    }
  }
}
