import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import {
  HTTP_HEADERS,
  MIME_TYPES,
  API_CONFIG,
  ERROR_OPERATIONS,
  API_ENDPOINTS,
} from '../constants';
import { Task, CreateTaskRequest, UpdateTaskRequest } from '../models/task';

const httpOptions = {
  headers: new HttpHeaders({ [HTTP_HEADERS.CONTENT_TYPE]: MIME_TYPES.JSON }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  constructor(private client: HttpClient) {}

  private handleError<T>(
    operation: string = ERROR_OPERATIONS.GENERIC,
    result?: T
  ) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }

  getAllTasks(): Observable<Task[]> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}`;
    return this.client
      .get<Task[]>(url)
      .pipe(catchError(this.handleError(ERROR_OPERATIONS.FETCH_TASKS, [])));
  }

  getTasksByUserId(userId: string): Observable<Task[]> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}/user/${userId}`;
    return this.client
      .get<Task[]>(url)
      .pipe(catchError(this.handleError(ERROR_OPERATIONS.FETCH_TASKS, [])));
  }

  getTask(id: string): Observable<Task> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}/${id}`;
    return this.client
      .get<Task>(url)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.FETCH_TASK, {} as Task))
      );
  }

  createTask(taskRequest: CreateTaskRequest): Observable<Task> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}`;
    return this.client
      .post<Task>(url, taskRequest, httpOptions)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.CREATE_TASK, {} as Task))
      );
  }

  updateTask(id: string, taskRequest: UpdateTaskRequest): Observable<Task> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}/${id}`;
    return this.client
      .put<Task>(url, taskRequest, httpOptions)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.UPDATE_TASK, {} as Task))
      );
  }

  deleteTask(id: string): Observable<void> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}/${id}`;
    return this.client
      .delete<void>(url)
      .pipe(
        catchError(
          this.handleError<void>(ERROR_OPERATIONS.DELETE_TASK, undefined)
        )
      );
  }

  toggleTaskStatus(id: string, completed: boolean): Observable<Task> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.TASKS}/${id}`;
    const updateRequest: UpdateTaskRequest = { isCompleted: completed };
    return this.client
      .put<Task>(url, updateRequest, httpOptions)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.UPDATE_TASK, {} as Task))
      );
  }
}
