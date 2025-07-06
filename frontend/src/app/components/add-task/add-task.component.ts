import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TasksApiService } from '../../services/tasks-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private taskApi: TasksApiService, private router: Router) {}

  dueDateForInput: string = '';
  taskToAdd: Task = {
    _id: '',
    userId: '',
    title: '',
    description: '',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    dueDate: new Date(),
  };
  onCancel() {
    this.router.navigate(['/tasks']);
  }
  onAddTask() {}
  onDueDateChange(event: Event) {}
}
