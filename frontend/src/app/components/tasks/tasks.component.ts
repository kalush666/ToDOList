import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksApiService } from '../../services/tasks-api.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(
    private api: TasksApiService,
    private userService: UserService,
    private router: Router,
    private userApi: ApiService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        if (this.currentRoute.startsWith('/tasks') && this.userId) {
          this.fetchTasks(this.userId);
        }
      });
  }
  isAdmin: boolean = false;
  tasks: Task[] = [];
  userId: string | null = null;
  showAddTask = false;
  showEditTask = false;
  taskToEdit: Task | null = null;
  private currentRoute = '';

  ngOnInit(): void {
    this.userId = this.userService.getUserId();

    if (this.userId) {
      this.fetchTasks(this.userId);
    } else {
      console.log('No user logged in');
    }
    this.userApi
      .canAccessAdmin(this.userService.getToken())
      .subscribe((isAdmin) => {
        this.isAdmin = isAdmin;
      });
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
    this.tasks = this.tasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    );
    this.showEditTask = false;
    this.taskToEdit = null;
  }

  onAddTask() {
    this.showAddTask = true;
  }

  onTaskAdded(newTask: Task) {
    this.tasks = [newTask, ...this.tasks];
    this.showAddTask = false;
  }

  onEditTask(task: Task) {
    this.taskToEdit = task;
    this.showEditTask = true;
  }

  onCancelForm() {
    this.showAddTask = false;
    this.showEditTask = false;
    this.taskToEdit = null;
  }

  isAddOrEditRoute(): boolean {
    return (
      this.currentRoute.includes('/add-task') ||
      this.currentRoute.includes('/edit-task')
    );
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }
  onLogOut() {
    this.userService.clearUser();
    this.router.navigate(['/login']);
  }
}
