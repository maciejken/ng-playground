import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../models';
import { TodoService } from '../services/todo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  formGroup: FormGroup;
  todo: Todo;

  @ViewChild('submitBtn') submitBtn: ElementRef;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder,
    private todoService: TodoService
    ) {
      this.todo = data;
      this.formGroup = this.formBuilder.group({
        name: [this.todo.name, Validators.required],
        done: [this.todo.done]
      });
  }

  ngOnInit() {
  }

  getTodo() {
    const todo = {
      name: this.formGroup.controls.name.value,
      done: this.formGroup.controls.done.value,
      _id: this.todo._id,
      createdAt: this.todo.createdAt
    };

    return todo;
  }

  createTodo() {
    this.todoService.createTodo(this.getTodo()).subscribe(data => {
      this.dialogRef.close(data);
    });
  }

  updateTodo() {
    this.todoService.updateTodo(this.getTodo()).subscribe(data => {
      this.dialogRef.close(data);
    });
  }

  submitTodo() {
    this.todo._id ? this.updateTodo() : this.createTodo();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
