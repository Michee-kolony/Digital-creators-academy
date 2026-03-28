import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  openIndex: number | null = null;

  toggle(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null; // fermer si déjà ouvert
    } else {
      this.openIndex = index; // ouvrir un autre
    }
  }

}