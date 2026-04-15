import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  logout() {
    // Implémentez votre logique de déconnexion ici
    console.log('Déconnexion...');
    // Rediriger vers la page de connexion
    // this.router.navigate(['/login']);
  }
}