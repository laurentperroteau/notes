import * as _ from 'lodash';

import {
  Component,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { noop } from '../../utils';
import { InputDefaultsService } from '../input/input-defaults.service';
import { InputOptions } from '../models/input-options.model';

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
      class="radio-label"
      [class.validation-error]="!options.valid">
      <span>{{ options.label }} </span><span *ngIf="options.disabled" class="obligatoire">*</span>
    </div>
    <div class="radio-inputs">
      <div
        *ngFor="let item of radioItems"
        (focus)="onFocus(item)"
        (blur)="onBlur()"
        (keyup.space)="onSpace($event)"
        (keydown.space)="onSpace($event, item)"
        tabindex="0"
        class="radio-item"
        [class.radio-item-marge]="radioPosition == 'horizontal'">
        <label
          [class.checked]="value === item.value"
          [class.disabled]="options.disabled"
          (click)="setValueOnClick(item.value)">
          {{ item.label }}
        </label>
      </div>
    </div>
  `,
  styleUrls: ['./radio.component.scss'],
  providers: [RadioComponentProvider],
  encapsulation: ViewEncapsulation.None,
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class.fui-radio') classComponent = true;
  @HostBinding('class.fui-radio-hidden') componenthide = false;
  @HostBinding('class.fui-radio-vertical') verticalLayout = false;
  @HostBinding('class.fui-radio-side-by-side') sideBySideLayout = false;

  @Input() options: Partial<InputOptions> = new InputOptions(); // TODO: utiliser InputOptions pour label, required, disable

  // Optionnel : oui/non par défaut
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
  @Input() radioPosition: 'horizontal' | 'vertical' | 'side-by-side' = 'vertical';

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

  constructor(private defaults: InputDefaultsService) {}

  ngOnInit(): void {
    this.verticalLayout = this.radioPosition === 'vertical';
    this.sideBySideLayout = this.radioPosition === 'side-by-side';

    this.options = this.options || new InputOptions();
    _.defaults(this.options, this.defaults);

    if (this.options.hidden) {
      this.componenthide = true;
    }
  }

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
    if (!this.options.disabled) {
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
      $event.preventDefault ? $event.preventDefault() : ($event.returnValue = false);
      this.setValueOnClick(item.value);
    }
  }
}
