import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';
import { TasksApiService } from '../api/tasks-api.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private api: TasksApiService) {}

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

  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskUpdated = new EventEmitter<Task>();

  toggleComplete() {
    this.api.toggleTaskStatus(this.task._id, !this.task.completed).subscribe({
      next: (updatedTask) => {
        this.task = updatedTask;
        this.taskUpdated.emit(this.task);
      },
      error: (error) => {
        console.error('Error toggling task completion:', error);
      },
    });
  }

  deleteTask() {
    this.api.deleteTask(this.task._id).subscribe({
      next: (response) => {
        this.taskDeleted.emit(this.task._id);
      },
      error: (error) => {
        console.error('Error deleting task:', error);
      },
    });
  }

  getTaskStatusText(): string {
    if (this.task.completed) {
      return 'Completed';
    }

    if (this.task.dueDate && new Date(this.task.dueDate) < new Date()) {
      return 'Overdue';
    }

    return 'Pending';
  }

  getStatusClass(): string {
    if (this.task.completed) {
      return 'status-completed';
    }

    if (this.task.dueDate && new Date(this.task.dueDate) < new Date()) {
      return 'status-overdue';
    }

    return 'status-pending';
  }

  editTask() {}
}
