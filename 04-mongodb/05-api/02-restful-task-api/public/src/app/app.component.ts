import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models/task.model';
import { TaskJson } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks: Task[] = [];
  task: Task;
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {}
  getTasks(): void {
    this.httpService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  getTask(id: string): void {
    this.httpService.getTask(id).subscribe(task => {
      console.log('here is the task', task);
      this.task = task.task;
    });
  }
}
