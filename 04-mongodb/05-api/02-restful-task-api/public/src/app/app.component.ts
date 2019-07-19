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
  tasks: Task[] = [];
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
    this.httpService.getTasks().subscribe(tasks => {
      console.log('here are the tasks', tasks);
      this.tasks = tasks;
    });
  }
}
