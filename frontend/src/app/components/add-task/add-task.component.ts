import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CreateTaskRequest, Task } from '../../models/task';
import { TasksApiService } from '../../services/tasks-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();
  @Input() userId: string | null = null;

  dueDateForInput: string = '';
  taskToAdd: CreateTaskRequest = {
    userId: '',
    title: '',
    description: '',
    dueDate: new Date(),
  };

  constructor(
    private taskApi: TasksApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (!this.userId && params['userId']) {
        this.userId = params['userId'];
      }
    });
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }

  onAddTask() {
    if (this.userId) {
      this.taskToAdd.userId = this.userId;
    }
    console.log('userId:', this.userId);
    console.log('taskToAdd:', this.taskToAdd);
    console.log('title:', this.taskToAdd.title);
    console.log('description:', this.taskToAdd.description);
    console.log('dueDate:', this.taskToAdd.dueDate);
    this.taskApi.createTask(this.taskToAdd).subscribe({
      next: (createdTask) => {
        this.taskAdded.emit(createdTask);
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error creating task:', error);
      },
    });
  }

  onDueDateChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    ``;
    if (input && input.value) {
      this.taskToAdd.dueDate = new Date(input.value);
    }
  }
}
