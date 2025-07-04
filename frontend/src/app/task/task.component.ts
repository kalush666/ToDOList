import { Component, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: Task = {
    _id: '',
    userId: '',
    title: '',
    description: '',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate: new Date(),
  };

  toggleComplete() {}
  deleteTask() {}
  editTask() {}
}
