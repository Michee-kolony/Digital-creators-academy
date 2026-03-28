import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {

  selectedFilter: string = 'all';

  images = [
    // 🎓 FORMATION
    { src: 'images/DSC_5715.jpg.jpeg', theme: 'formation' },
    { src: 'images/DSC_5581.jpg.jpeg', theme: 'formation' },
    { src: 'images/DSC_5637.jpg.jpeg', theme: 'formation' },
    { src: 'images/DSC_5648.jpg.jpeg', theme: 'formation' },

    // 🏅 DIPLOME
    { src: 'images/DSC_6471.jpg.jpeg', theme: 'diplome' },
    { src: 'images/DSC_6468.jpg.jpeg', theme: 'diplome' },
    { src: 'images/DSC_6497.jpg.jpeg', theme: 'diplome' },

    // 👨‍🏫 FORMATEUR
    { src: 'images/DSC_5882.jpg.jpeg', theme: 'formateur' },
    { src: 'images/DSC_5555.jpg.jpeg', theme: 'formateur' },
    { src: 'images/DSC_5525.jpg.jpeg', theme: 'formateur' },

    // 👥 ÉQUIPE
    { src: 'assets/img/equipe', theme: 'equipe' },
    { src: 'assets/img/equipe2.jpg', theme: 'equipe' },
    { src: 'assets/img/equipe3.jpg', theme: 'equipe' },
    { src: 'assets/img/equipe4.jpg', theme: 'equipe' },
  ];

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  get filteredImages() {
    return this.selectedFilter === 'all'
      ? this.images
      : this.images.filter(img => img.theme === this.selectedFilter);
  }
}