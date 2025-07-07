import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private userSubject = new BehaviorSubject<User | null>(null);

  setUser(user: User) {
    this.userSubject.next(user);
    sessionStorage.setItem('userId', user._id);
  }

  getUser(): User | null {
    const user = this.userSubject.getValue();
    if (user) {
      return user;
    }
    return null;
  }
  getUserId(): string | null {
    const user = this.getUser();
    if (user) {
      return user._id;
    }
    return sessionStorage.getItem('userId');
  }
}
