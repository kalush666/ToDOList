import { Component, OnInit } from '@angular/core';
import { UpdateUserRequest, User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
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
    const userFromService = this.userService.getUser();
    if (userFromService) {
      this.user.id = userFromService._id;
      this.user.firstName = userFromService.firstName;
      this.user.lastName = userFromService.lastName;
      this.user.email = userFromService.email;
    } else {
      console.error('No user found in UserService');
    }
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
  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
