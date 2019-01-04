import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../models';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  formGroup: FormGroup;
  todoList$: Observable<any> = this.todoService.getTodos();
  todoList: Todo[];
  displayedColumns = ['done', 'name', 'date', 'edit', 'close'];

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.todoList$.subscribe(data => {
      this.todoList = data;
    });
  }

  createTodo() {
    const newTodo = { name: null, done: false };
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      data: newTodo
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.todoList = data;
      }
    });
  }

  updateTodo(todo: Todo) {
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      data: todo
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.todoList = data;
      }
    });
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo._id).subscribe(data => {
      this.todoList = data;
    });
  }

}
