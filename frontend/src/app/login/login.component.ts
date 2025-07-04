import { Component } from '@angular/core';
import { LoginRequest } from '../models/user';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private api: ApiService, private router: Router) {}

  user: LoginRequest = {
    email: '',
    password: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  onLogin() {
    if (this.user.email && this.user.password) {
      this.isLoading = true;
      this.errorMessage = '';

      this.api.login(this.user).subscribe({
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
          this.errorMessage = 'Invalid email or password';
          this.isLoading = false;
        },
      });
    }
  }
}
