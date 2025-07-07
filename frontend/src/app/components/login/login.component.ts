import { Component } from '@angular/core';
import { LoginRequest } from '../../models/user';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ValidationHelper } from '../../helpers/validation.helper';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private api: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  user: LoginRequest = {
    email: '',
    password: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;

  onLogin() {
    this.errorMessage = ValidationHelper.getErrorMessage(
      this.user.email,
      this.user.password
    );
    if (!this.errorMessage) {
      this.isLoading = true;
      this.errorMessage = '';

      this.api.login(this.user).subscribe({
        next: (response) => {
          console.log('Login response:', response);
          if (response.user && response.user._id) {
            this.userService.setUser(response.user);
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
