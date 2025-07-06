import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private currentTaskSubject = new BehaviorSubject<Task | null>(null);
  public currentTask = this.currentTaskSubject.asObservable();

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  setCurrentTask(task: Task): void {
    this.currentTaskSubject.next(task);
  }
  getCurrentTask(): Task | null {
    return this.currentTaskSubject.value;
  }
  clearCurrentTask(): void {
    this.currentTaskSubject.next(null);
  }

  setTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
  }
  addTask(task: Task): void {
    const current = this.tasksSubject.value;
    this.tasksSubject.next([task, ...current]);
  }
  getTasks(): Task[] {
    return this.tasksSubject.value;
  }
}
