import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { API_CONFIG, API_ENDPOINTS } from '../constants/api.constants';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private client: HttpClient) {}

  canAccess() {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.ADMIN}`;
    return this.client.get(url).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
