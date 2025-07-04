import { Component } from '@angular/core';
import { CreateUserRequest } from '../models/user';
import { ApiService } from '../api/api.service';
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

    this.api.signUp(this.user).subscribe({
      next: (response) => {
        if (response.user && response.user._id) {
          localStorage.setItem('user_id', response.user._id);
          this.router.navigate(['/tasks']);
        } else {
          this.errorMessage = 'Invalid response from server';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to create account';
        this.isLoading = false;
      },
    });
  }
}
