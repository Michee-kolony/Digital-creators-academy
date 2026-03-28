import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

  isVideoOpen = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  openVideo() {
    const url = '/images/jeny.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
  }

}