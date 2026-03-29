import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  isPopupOpen = false;
  showScrollButton = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirection automatique en haut de page
    window.scrollTo(0, 0);
    
    // Optionnel : Écouter les changements de route pour rester en haut
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Afficher/masquer le bouton en fonction du défilement
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }
}