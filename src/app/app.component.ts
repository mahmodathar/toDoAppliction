import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Task List Appliction';
  taskList : string[] = [];

  ngOnInit(): void {
    if (localStorage.getItem('my_tasks')) {
      this.taskList = JSON.parse(localStorage.getItem('my_tasks'));
    }
  }
}
