import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;
  toasts: Toast[] = [];
  private toastCounter = 0;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });

      this.showToast('Veuillez remplir correctement tous les champs', 'error');
      return;
    }

    this.isLoading = true;

    // Simulation loading seulement (design)
    setTimeout(() => {

      this.showToast('Connexion réussie !', 'success');

      // Redirection directe
      setTimeout(() => {
        this.router.navigate(['/admin/dashboard']);
      }, 1000);

      this.isLoading = false;

    }, 1000);
  }

  showToast(message: string, type: 'success' | 'error'): void {
    const id = this.toastCounter++;
    this.toasts.push({ id, message, type });

    setTimeout(() => {
      this.removeToast(id);
    }, 4000);
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }
}