import { Component } from '@angular/core';
import { CreateUserRequest, AuthResponse } from '../../models/user';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(
    private api: ApiService,
    private userService: UserService,
    private router: Router
  ) {}
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
      next: (response: AuthResponse) => {
        if (response.user && response.user._id) {
          this.userService.setUser(response.user);
          this.userService.setToken(response.access_token);
          this.router.navigate(['/tasks']);
        } else {
          this.errorMessage = 'Invalid response from server';
        }
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Failed to create account';
        this.isLoading = false;
      },
    });
  }
}
