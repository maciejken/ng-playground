import { FieldBase } from './field-base';

export class FieldText extends FieldBase<string> {
  controlType = 'text';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
