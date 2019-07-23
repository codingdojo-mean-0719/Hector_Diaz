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
  createTask(newTask): Observable<TaskJson> {
    console.log('create task post triggerd');
    return this.http.post<TaskJson>('/tasks', newTask);
  }
  updateTask(task: Task): Observable<TaskJson> {
    console.log('update put requset triggerd');
    return this.http.put<TaskJson>(`/tasks/${task._id}`, task);
  }
  deleteTask(id: string) {
    return this.http.delete(`/tasks/${id}`);
  }
}
