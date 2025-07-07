import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksApiService } from '../../services/tasks-api.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-edit-task',
  standalone: false,
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit, OnChanges {
  @Input() task: Task | null = null;
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

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

  constructor(
    private tasksApi: TasksApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      const taskId = params['taskId'];
      if (taskId) {
        this.tasksApi.getTask(taskId).subscribe((task) => {
          if (task) {
            this.currentTask = { ...task };
          }
        });
      }
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.currentTask = { ...this.task };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && this.task) {
      this.currentTask = { ...this.task };
    }
  }

  onApplyEdit() {
    this.tasksApi.updateTask(this.currentTask._id, this.currentTask).subscribe({
      next: (updatedTask) => {
        this.taskUpdated.emit(updatedTask);
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error updating task:', error);
      },
    });
  }

  onCancel() {
    this.cancel.emit();
    this.router.navigate(['/tasks']);
  }

  get dueDateForInput(): string {
    if (!this.currentTask || !this.currentTask.dueDate) return '';
    const d = new Date(this.currentTask.dueDate);
    if (isNaN(d.getTime())) return '';
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  get dueTimeForInput(): string {
    if (!this.currentTask || !this.currentTask.dueDate) return '';
    const d = new Date(this.currentTask.dueDate);
    if (isNaN(d.getTime())) return '';
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  onDueDateChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && input.value) {
      const [year, month, day] = input.value.split('-');
      const d = new Date(this.currentTask.dueDate || new Date());
      d.setFullYear(Number(year));
      d.setMonth(Number(month) - 1);
      d.setDate(Number(day));
      this.currentTask.dueDate = d;
    }
  }

  onDueTimeChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && input.value) {
      const [hours, minutes] = input.value.split(':');
      const d = new Date(this.currentTask.dueDate || new Date());
      d.setHours(Number(hours));
      d.setMinutes(Number(minutes));
      d.setSeconds(0);
      d.setMilliseconds(0);
      this.currentTask.dueDate = d;
    }
  }
}
