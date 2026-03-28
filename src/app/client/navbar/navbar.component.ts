import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolled = false;
  isMenuOpen = false;

  // 🔥 DETECT SCROLL
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // 🔥 TOGGLE MENU
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 🔥 CLOSE MENU
  closeMenu() {
    this.isMenuOpen = false;
  }
}