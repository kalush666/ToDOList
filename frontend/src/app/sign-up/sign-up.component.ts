import { Component } from '@angular/core';
import { CreateUserRequest } from '../models/user';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private api: ApiService, private router: Router) {}
  user: CreateUserRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  errorMessage: string = '';
  isLoading: boolean = false;

  isValid() {
    return (
      this.user.firstName &&
      this.user.lastName &&
      this.user.email &&
      this.user.password
    );
  }
  onSignUp() {
    if (!this.isValid()) return;
    this.isLoading = true;
    this.errorMessage = '';
  }
}
