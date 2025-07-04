import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HTTP_HEADERS,
  MIME_TYPES,
  API_CONFIG,
  ERROR_OPERATIONS,
  LOG_LEVELS,
  API_ENDPOINTS,
} from './constants';
import { catchError, Observable, tap, of } from 'rxjs';
import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  LoginRequest,
  AuthResponse,
} from './models/user';

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
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`;
    return this.client.post<AuthResponse>(url, credentials, httpOptions).pipe(
      tap((response) => {
        console.log(
          `User logged in successfully: ${response.user.firstName} ${response.user.lastName}`
        );
        localStorage.setItem('auth_token', response.accessToken);
      }),
      catchError(
        this.handleError(ERROR_OPERATIONS.LOGIN, {
          accessToken: '',
          user: {} as User,
        })
      )
    );
  }

  signUp(credentials: CreateUserRequest): Observable<AuthResponse> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.SIGNUP}`;
    return this.client.post<AuthResponse>(url, credentials, httpOptions).pipe(
      tap((response) => {
        console.log(
          `User signed up successfully: ${response.user.firstName} ${response.user.lastName}`
        );
        localStorage.setItem('auth_token', response.accessToken);
      }),
      catchError(
        this.handleError(ERROR_OPERATIONS.CREATE_USER, {
          accessToken: '',
          user: {} as User,
        })
      )
    );
  }

  getUser(id: string): Observable<User> {
    const url = `${API_CONFIG.BASE_URL}/users/${id}`;
    return this.client.get<User>(url).pipe(
      tap((user) =>
        console.log(`Fetched user: ${user.firstName} ${user.lastName}`)
      ),
      catchError(this.handleError(ERROR_OPERATIONS.FETCH_USER, {} as User))
    );
  }

  createUser(userRequest: CreateUserRequest): Observable<User> {
    const url = `${API_CONFIG.BASE_URL}/users`;
    return this.client.post<User>(url, userRequest, httpOptions).pipe(
      tap((newUser) =>
        console.log(`Created user: ${newUser.firstName} ${newUser.lastName}`)
      ),
      catchError(this.handleError(ERROR_OPERATIONS.CREATE_USER, {} as User))
    );
  }

  updateUser(id: string, userRequest: UpdateUserRequest): Observable<User> {
    const url = `${API_CONFIG.BASE_URL}/users/${id}`;
    return this.client.put<User>(url, userRequest, httpOptions).pipe(
      tap((updatedUser) =>
        console.log(
          `Updated user: ${updatedUser.firstName} ${updatedUser.lastName}`
        )
      ),
      catchError(this.handleError(ERROR_OPERATIONS.UPDATE_USER, {} as User))
    );
  }

  deleteUser(id: string): Observable<void> {
    const url = `${API_CONFIG.BASE_URL}/users/${id}`;
    return this.client.delete<void>(url).pipe(
      tap(() => console.log(`Deleted user with id: ${id}`)),
      catchError(
        this.handleError<void>(ERROR_OPERATIONS.DELETE_USER, undefined)
      )
    );
  }
}
