import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  fieldData$: Subject<string> = new Subject();

  setFields(fieldData: any[]): void {
    this.fieldData$.next(JSON.stringify(fieldData));
    console.log(fieldData);
  }
}
