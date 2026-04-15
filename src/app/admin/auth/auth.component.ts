import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;
  toasts: Toast[] = [];
  private toastCounter = 0;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    // Vérifier si des identifiants sont sauvegardés
    const savedEmail = localStorage.getItem('adminEmail');
    if (savedEmail) {
      this.loginForm.patchValue({ email: savedEmail, rememberMe: true });
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
      this.showToast('Veuillez remplir correctement tous les champs', 'error');
      return;
    }

    this.isLoading = true;
    const { email, password, rememberMe } = this.loginForm.value;

    // Simulation d'appel API
    setTimeout(() => {
      // Exemple de validation - à remplacer par votre vraie logique d'authentification
      if (email === 'admin@digitalcreators.com' && password === 'admin123') {
        if (rememberMe) {
          localStorage.setItem('adminEmail', email);
        } else {
          localStorage.removeItem('adminEmail');
        }
        this.showToast('Connexion réussie ! Redirection en cours...', 'success');
        // Redirection après 2 secondes
        setTimeout(() => {
          // Rediriger vers le dashboard admin
          // this.router.navigate(['/admin/dashboard']);
          console.log('Redirection vers le dashboard');
        }, 2000);
      } else {
        this.showToast('Email ou mot de passe incorrect', 'error');
      }
      this.isLoading = false;
    }, 1500);
  }

  showToast(message: string, type: 'success' | 'error'): void {
    const id = this.toastCounter++;
    this.toasts.push({ id, message, type });
    
    // Supprimer automatiquement après 4 secondes
    setTimeout(() => {
      this.removeToast(id);
    }, 4000);
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }
}