import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { cloneDeep } from 'lodash';
// import { MatDialogRef } from '@angular/material';

import { FieldBase } from '../form-field/field-base';
import { FieldText } from '../form-field/field-text';
import { FieldControlService } from '../field-control.service';
import { FieldService } from '../field.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [FieldControlService]
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  fieldData = [
    { index: 0, label: 'Pole 1', value: 'abc'},
    { index: 1, label: 'Pole 2', value: 'def'}
  ];
  fields: FieldBase<any>[] = [];
  @ViewChild('submitBtn') submitBtn: ElementRef;

  constructor(
    // private dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    private fcs: FieldControlService,
    private fs: FieldService
    ) {
    // dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.generateForm(this.fieldData);
  }

  generateForm(data) {

    const fieldData = cloneDeep(data);

    if (this.fields.length > 0) {
      this.fields = [];
    }
    fieldData.forEach((item, index) => {
      this.fields.push(new FieldText({
        key: 'field',
        label: item.label,
        value: item.value,
        required: true,
        order: index
      }));
    });
    this.form = this.fcs.toFormGroup(this.fields);
    console.log(this.form.controls);
  }

  getFieldData() {
    const fieldData = [];
    let index;
    Object.entries(this.form.controls).forEach(formControl => {
      index = formControl[0].replace(/[a-zA-z]/g, '');
      fieldData.push({
        index,
        label: `Pole ${++index}`,
        value: formControl[1].value || null
      });
    });
    return fieldData.sort((f1, f2) => f1.index - f2.index);
  }

  addField() {
    const fieldData = this.getFieldData();
    const index = fieldData.length;
    const label = `Pole ${index + 1}`;
    const value = '';
    fieldData.push({ index, label, value });
    this.generateForm(fieldData);
  }

  onSubmit() {
    this.fs.setFields(this.getFieldData());
  }

}
