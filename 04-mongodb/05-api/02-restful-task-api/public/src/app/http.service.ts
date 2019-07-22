import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './models/task.model';
import { Observable } from 'rxjs';
import { TaskJson } from './models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }
  getTask(id): Observable<TaskJson> {
    return this.http.get<TaskJson>(`/tasks/${id}`);
  }
}
