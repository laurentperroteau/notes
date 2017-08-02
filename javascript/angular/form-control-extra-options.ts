
// Liste les attributs possible d'un input/textarea etc...
export class InputOptions {
  name: string;
  label: string;
  valid: boolean;
  required: boolean;
  readonly: boolean;
  size: number;
  maxlength: number;
  disabled: boolean;
  autofocus: boolean;
  placeholder: string;
  pattern: string;

  constructor(options?: Partial<InputOptions>) {
    this.valid = true;
    _.merge(this, options);
  }
}

export type ControlType = [any] | [any, Function | Function[]] | FormGroup;

export interface InputInfos {
  control: ControlType;
  options?: InputOptions;
  visible?: boolean;
}

@Component(...)
export class ExempleComponent {

  constructor(public fb: FormBuilder) {
  
    // Création d'une collection de iso au model qui inclus le FormControl et les options pas disponible dans FormControl
    // ... les options sont utiliser par les composants de formualaire
    this.inputs = {
      detail: {
        control: ['', Validators.required],
        options: new InputOptions({
          label: 'Lorem ipsum',
          required: true
        }),
      }
    };

    // Mapper les "control" pour créer le formulaire
    const controls = _.mapValues(
      this.inputs,
      'control'
    ) as MappedProperties<Model, InputInfos>;

    this.form = this.fb.group(controls);
  }
}
