import { Component } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent {

  searchTerm: string = '';

  formations = [
    {
      title: 'Développement Web',
      price: 200,
      duration: '3 mois',
      startDate: '10 Avril 2026',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
      title: 'Design Graphique',
      price: 150,
      duration: '2 mois',
      startDate: '15 Avril 2026',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      title: 'Marketing Digital',
      price: 180,
      duration: '2 mois',
      startDate: '20 Avril 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      title: 'Montage Vidéo',
      price: 170,
      duration: '1 mois',
      startDate: '25 Avril 2026',
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
    }
  ];

  get filteredFormations() {
    return this.formations.filter(f =>
      f.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}