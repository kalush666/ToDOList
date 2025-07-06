import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TasksApiService } from '../../services/tasks-api.service';
import { Task } from '../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  standalone: false,
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private tasksApi: TasksApiService,
    private router: Router
  ) {}

  currentTask: Task = {
    _id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    completed: false,
    userId: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  ngOnInit(): void {
    const editedTask = this.taskService.getCurrentTask();
    if (editedTask) {
      this.currentTask = { ...editedTask };
    }
    if (this.currentTask) {
      console.log('Editing task:', this.currentTask);
    } else {
      console.log('No task selected for editing');
    }
  }
  onApplyEdit() {
    this.tasksApi.updateTask(this.currentTask._id, this.currentTask).subscribe({
      next: (updatedTask) => {
        console.log('Task updated successfully:', updatedTask);
        this.taskService.clearCurrentTask();
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error updating task:', error);
      },
    });
  }
  onCancel() {
    console.log('Cancelling edit, clearing current task');
    this.taskService.clearCurrentTask();
    this.router.navigate(['/tasks']);
  }
  get dueDateForInput(): string {
    if (!this.currentTask || !this.currentTask.dueDate) return '';
    const d = new Date(this.currentTask.dueDate);
    if (isNaN(d.getTime())) return '';
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  onDueDateChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && input.value) {
      this.currentTask.dueDate = new Date(input.value);
    }
  }
}
