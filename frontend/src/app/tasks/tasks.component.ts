import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [
    {
      _id: '1',
      userId: '1',
      title: 'Complete Angular Project',
      description: 'Finish the todo list application with proper components',
      completed: false,
      createdAt: new Date('2025-07-01'),
      updatedAt: new Date('2025-07-01'),
      dueDate: new Date('2025-07-10'),
    },
    {
      _id: '2',
      userId: '1',
      title: 'Review Code',
      description: 'Review the backend API implementation',
      completed: true,
      createdAt: new Date('2025-07-02'),
      updatedAt: new Date('2025-07-03'),
      dueDate: new Date('2025-07-05'),
    },
    {
      _id: '3',
      userId: '1',
      title: 'Write Documentation',
      description: 'Document the project setup and usage instructions',
      completed: false,
      createdAt: new Date('2025-07-03'),
      updatedAt: new Date('2025-07-03'),
      dueDate: new Date('2025-07-15'),
    },
  ];

  newTask: Task = {
    _id: '',
    userId: '1',
    title: '',
    description: '',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate: new Date(),
  };

  isLoading: boolean = false;
  errorMessage: string = '';
}
