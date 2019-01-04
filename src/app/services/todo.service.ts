import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  apiPrefix = 'http://localhost:3080/todos';

  getTodos(): Observable<any> {
    return this.http.get(this.apiPrefix + '/all');
  }

  createTodo(newTodo): Observable<any> {
    return this.http.post(`${this.apiPrefix}/create`, newTodo);
  }

  updateTodo(update): Observable<any> {
    return this.http.put(`${this.apiPrefix}/${update._id}/update`, update);
  }

  removeTodo(id: string): Observable<any> {
    return this.http.delete(`${this.apiPrefix}/${id}/delete`);
  }

}
