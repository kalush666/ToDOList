import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HTTP_HEADERS,
  MIME_TYPES,
  API_CONFIG,
  ERROR_OPERATIONS,
  API_ENDPOINTS,
} from '../constants';
import { catchError, Observable, tap, of } from 'rxjs';
import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  LoginRequest,
  AuthResponse,
} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ [HTTP_HEADERS.CONTENT_TYPE]: MIME_TYPES.JSON }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private client: HttpClient) {}

  private handleError<T>(
    operation: string = ERROR_OPERATIONS.GENERIC,
    result?: T
  ) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`;
    return this.client
      .post<AuthResponse>(url, credentials, {
        ...httpOptions,
      })
      .pipe(
        tap((response) => {
          if (response && response.access_token) {
            (window as any).userServiceInstance?.setToken(
              response.access_token
            );
          }
        }),
        catchError(
          this.handleError(ERROR_OPERATIONS.LOGIN, {
            user: {} as User,
            access_token: '',
          })
        )
      );
  }

  signUp(credentials: CreateUserRequest): Observable<AuthResponse> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.SIGNUP}`;
    return this.client
      .post<AuthResponse>(url, credentials, {
        ...httpOptions,
      })
      .pipe(
        tap((response) => {
          if (response && response.access_token) {
            (window as any).userServiceInstance?.setToken(
              response.access_token
            );
          }
        }),
        catchError(
          this.handleError(ERROR_OPERATIONS.CREATE_USER, {
            user: {} as User,
            access_token: '',
          })
        )
      );
  }

  getUser(id: string): Observable<User> {
    const url = `${API_CONFIG.BASE_URL}/users/${id}`;
    return this.client
      .get<User>(url)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.FETCH_USER, {} as User))
      );
  }

  createUser(userRequest: CreateUserRequest): Observable<User> {
    const url = `${API_CONFIG.BASE_URL}/users`;
    return this.client
      .post<User>(url, userRequest, httpOptions)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.CREATE_USER, {} as User))
      );
  }

  updateUser(id: string, userRequest: UpdateUserRequest): Observable<User> {
    const url = `${API_CONFIG.BASE_URL}/users/${id}`;
    return this.client
      .put<User>(url, userRequest, httpOptions)
      .pipe(
        catchError(this.handleError(ERROR_OPERATIONS.UPDATE_USER, {} as User))
      );
  }

  deleteUser(id: string): Observable<void> {
    const url = `${API_CONFIG.BASE_URL}/users/${id}`;
    return this.client
      .delete<void>(url)
      .pipe(
        catchError(
          this.handleError<void>(ERROR_OPERATIONS.DELETE_USER, undefined)
        )
      );
  }

  canAccessAdmin(token: string | null): Observable<boolean> {
    const headers = token
      ? new HttpHeaders({
          [HTTP_HEADERS.CONTENT_TYPE]: MIME_TYPES.JSON,
          Authorization: `Bearer ${token}`,
        })
      : new HttpHeaders({ [HTTP_HEADERS.CONTENT_TYPE]: MIME_TYPES.JSON });
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.ADMIN.CAN_ACCESS}`;
    return this.client.get<boolean>(url, { headers }).pipe(
      tap(() => of(true)),
      catchError((error) => {
        console.error('Admin access check failed:', error);
        return of(false);
      })
    );
  }
}
