import { Component, OnInit } from '@angular/core';
import { UpdateUserRequest, User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userApi: ApiService,
    private router: Router
  ) {}
  isLoading: boolean = false;
  errorMessage = '';
  user: UpdateUserRequest = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.user.id = params['userId'] || '';
    });
    this;
    this.userApi.getUser(this.user.id).subscribe({
      next: (user: User) => {
        if (user) {
          this.user.firstName = user.firstName;
          this.user.lastName = user.lastName;
          this.user.email = user.email;
        }
      },
      error: (error) => {
        console.error('Failed to fetch user:', error);
      },
    });
  }
  isValid() {
    return this.user.firstName && this.user.lastName && this.user.email;
  }
  onUpdateProfile() {
    if (!this.isValid) return;
    this.isLoading = true;
    this.errorMessage = '';
    this.userApi.updateUser(this.user.id, this.user).subscribe({
      next: (response) => {
        if (response) {
          this.isLoading = false;
          console.log('Profile updated successfully:', response);
        } else {
          this.errorMessage = 'Invalid response from server';
          this.isLoading = false;
        }
      },
      error: (error) => {
        this.errorMessage = 'Failed to update profile';
        this.isLoading = false;
      },
    });
    this.router.navigate(['/tasks']);
  }
}
