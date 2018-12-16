import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './field-base';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent {
  @Input() field: FieldBase<any>;
  @Input() index: number;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
