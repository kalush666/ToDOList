import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { ApiService } from '../api/api.service';
import { TasksApiService } from '../api/tasks-api.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  constructor(private api: TasksApiService) {}
  tasks: Task[] = [];
  userId: string | null = null;
  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
    if (this.userId) {
      this.fetchTasks(this.userId);
    }
  }

  fetchTasks(userId: string) {
    this.api.getTasksByUserId(userId).subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Failed to fetch tasks:', error);
      },
    });
  }

  onTaskDeleted(taskId: string) {
    this.tasks = this.tasks.filter((task) => task._id !== taskId);
  }

  onTaskUpdated(updatedTask: Task) {
    const index = this.tasks.findIndex((task) => task._id === updatedTask._id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
