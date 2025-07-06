import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private currentTaskSubject = new BehaviorSubject<Task | null>(null);
  public currentTask = this.currentTaskSubject.asObservable;

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
}
