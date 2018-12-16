import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { FieldService } from './field.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fieldData$: Observable<string>;

  constructor(
    public dialog: MatDialog,
    private fs: FieldService
    ) {
      this.fieldData$ = this.fs.fieldData$;
    }

  openDialog() {
    this.dialog.open(DialogComponent, {disableClose: true});
  }
}
