// src/app/features/auth/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required], // 👈 required for attendee/organizer mapping
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]], 
      role: ['ATTENDEE', Validators.required], // or 'ORGANIZER'
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    this.isSubmitting = true;

    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.userId.toString());
        localStorage.setItem('role', res.role);
        if(localStorage.getItem('role') === 'ORGANIZER') {
        this.router.navigate(['/organizer/dashboard']);
        }
        else{
          this.router.navigate(['attendee']);
        } // navigate after success
        this.isSubmitting = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Registration failed';
        this.isSubmitting = false;
      },
    });
  }
}
