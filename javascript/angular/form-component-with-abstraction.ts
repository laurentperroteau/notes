// base-form.component
import * as _ from 'lodash';

import { Subscription } from 'rxjs';

import { OnInit, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * "Abstract class" à utiliser pour chaque "component form". Elle contient :
 *     - des méthodes obligatoires (ex: createInput)
 *     - helper méthodes (ex: mapInput)
 *     - automatise (ex: unsubscribe)
 */
export abstract class BaseFormComponent implements OnInit, OnDestroy {
  valueChangesSubs: Subscription[] = [];

  abstract createInput();

  abstract createGroup();

  abstract initValueChangesSubs();

  protected mapInputsByControl(inputs) {
    return _.mapValues(inputs, 'control');
  }

  protected valueChangesToMethod(toAttach: AbstractControl, method: any) {
    this.valueChangesSubs.push(toAttach.valueChanges.subscribe(method));
  }

  protected unSurbscribeValueChanges() {
    this.valueChangesSubs.forEach(v => v.unsubscribe());
  }

  ngOnInit() {
    console.log('init in base component')
  }

  ngOnDestroy() {
    this.unSurbscribeValueChanges();
    this.componentDestroy();
  }

  abstract componentDestroy();
}


// form.component
import { FormBuilder, FormGroup } from '@angular/forms';

type MappedProperties<T, U> = {[P in keyof T]: U};
type ControlType = [any] | [any, Function | Function[]] | FormGroup;

interface InputInfos {
  control: ControlType;
  options?: any;
}

interface Pizza {
  base: 'tomate' | 'creme';
  pate: 'fine' | 'epaisse';
  nom: string;
}

import { BaseFormComponent } from './base.component';

/**
 * "Form class" qui ne doit controler que le formulaire :
 *    - pas de communication de service API
 *    - pas d'action or form
 * => Doit être étendu pas le "composant/vue" qui contient le form   
 */
export class FormComponent extends BaseFormComponent {
  mainForm: FormGroup;
  inputs: MappedProperties<Pizza, InputInfos>;

  constructor(public fb: FormBuilder,) {
    super();
  }

  createInput() {
    this.inputs = {
      base: {
        control: ['tomate'],
      },
      pate: {
        control: [''],
      },
      nom: {
        control: [''],
      }
    };
  }

  createGroup() {
    const groupControls = this.mapInputsByControl(this.inputs) as MappedProperties<Pizza, ControlType>;

    this.mainForm = this.fb.group(groupControls);
  }

  initValueChangesSubs() {
    this.valueChangesToMethod(this.mainForm.controls['pate'], this._patePizzaValueChange);
  }

  // @use : surcharger la méthode si besoin de plus de traitement
  updateFormValue(value: Partial<Pizza>) {
    this.mainForm.patchValue(value);
  }

  validForm(validation: boolean): Pizza | boolean {
    let formResult = false;

    if (this.mainForm.valid) {
      formResult = this.mainForm.value;
    }

    return formResult;
  }

  private _patePizzaValueChange(newValue) {
    console.log('new pate value ' + newValue);
  }

  componentDestroy() {/* Action à la destruction du composant, or subscription */}
}


// pizza.component
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FormComponent } from './form.component';

@Component({
    selector: 'pizza',
    template: `
    <form [formGroup]="mainForm">
        {{ type }} {{ name }}
        <input formControlName="base" />
        <input formControlName="pate" />
        <input type="submit" (click)="submit()" />
    </form>`,
    styles: [`
        form {
            background: white;
        }
    `]
})
export class PizzaComponent extends FormComponent {
    type = 'Pizza';
    name = 'Toto';

    constructor(
        public fb: FormBuilder,
    ) {
        super(fb);

        this.createInput();
        this.createGroup();
        this.initValueChangesSubs();

        setTimeout(() => {
            this.updateFormValue({pate: 'fine'})
        }, 2000);

        console.log(this);
    }

    // Attention, cela surcharge le init de base
    // ngOnInit() {}

    submit() {
        const result = this.validForm(true);

        setTimeout(() => {
            console.debug('Sent form');
            console.debug('Response server : 200 OK')
        }, 2000);
    }
}
