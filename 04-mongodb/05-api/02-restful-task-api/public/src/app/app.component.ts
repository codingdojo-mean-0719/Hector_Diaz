import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'public';
  task1 = new Task();
  tasks: Task[] = [];
  task: Task;
  constructor(private httpService: HttpService) {}
  ngOnInit() {}
  createTask(event: Event): void {
    event.preventDefault();
    this.httpService.createTask(this.task1).subscribe(() => {
      this.task1 = new Task();
    });
    this.getTasks();
  }
  updateTask(event: Event): void {
    event.preventDefault();

    this.httpService.updateTask(this.task).subscribe(task => {
      this.task = new Task();
      console.log('here is the subscribe task', task);
    });
    this.getTasks();
  }
  deleteTask(id: string): void {
    this.httpService
      .deleteTask(id)
      .subscribe(confirmation =>
        console.log('her is delete confirmation', confirmation)
      );
    this.getTasks();
  }
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
