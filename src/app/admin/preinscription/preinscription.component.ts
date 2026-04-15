import { Component } from '@angular/core';

@Component({
  selector: 'app-preinscription',
  templateUrl: './preinscription.component.html',
  styleUrl: './preinscription.component.css'
})
export class PreinscriptionComponent {
  searchTerm: string = '';
  filterFiliere: string = '';
  filterStatus: string = '';
  selectedStudent: any = null;
  
  // Données des étudiants pré-inscrits
  students = [
    {
      id: 1,
      nom: 'Thomas Martin',
      email: 'thomas.martin@email.com',
      telephone: '+33 6 12 34 56 78',
      filiere: 'Informatique',
      statut: 'en_attente',
      dateDemande: '2024-01-15'
    },
    {
      id: 2,
      nom: 'Sophie Dubois',
      email: 'sophie.dubois@email.com',
      telephone: '+33 6 23 45 67 89',
      filiere: 'Marketing Digital',
      statut: 'en_cours',
      dateDemande: '2024-01-14'
    },
    {
      id: 3,
      nom: 'Lucas Bernard',
      email: 'lucas.bernard@email.com',
      telephone: '+33 6 34 56 78 90',
      filiere: 'Design Graphique',
      statut: 'valide',
      dateDemande: '2024-01-13'
    },
    {
      id: 4,
      nom: 'Emma Petit',
      email: 'emma.petit@email.com',
      telephone: '+33 6 45 67 89 01',
      filiere: 'Gestion d\'Entreprise',
      statut: 'en_attente',
      dateDemande: '2024-01-12'
    },
    {
      id: 5,
      nom: 'Nicolas Robert',
      email: 'nicolas.robert@email.com',
      telephone: '+33 6 56 78 90 12',
      filiere: 'Informatique',
      statut: 'en_cours',
      dateDemande: '2024-01-11'
    },
    {
      id: 6,
      nom: 'Julie Richard',
      email: 'julie.richard@email.com',
      telephone: '+33 6 67 89 01 23',
      filiere: 'Marketing Digital',
      statut: 'valide',
      dateDemande: '2024-01-10'
    },
    {
      id: 7,
      nom: 'Antoine Dubois',
      email: 'antoine.dubois@email.com',
      telephone: '+33 6 78 90 12 34',
      filiere: 'Design Graphique',
      statut: 'en_attente',
      dateDemande: '2024-01-09'
    }
  ];

  filteredStudents: any[] = [];

  constructor() {
    this.filteredStudents = [...this.students];
  }

  filterStudents() {
    this.filteredStudents = this.students.filter(student => {
      // Filtre par terme de recherche
      const matchesSearch = !this.searchTerm || 
        student.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.telephone.includes(this.searchTerm) ||
        student.filiere.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      // Filtre par filière
      const matchesFiliere = !this.filterFiliere || student.filiere === this.filterFiliere;
      
      // Filtre par statut
      const matchesStatus = !this.filterStatus || student.statut === this.filterStatus;
      
      return matchesSearch && matchesFiliere && matchesStatus;
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterStudents();
  }

  viewDemande(student: any) {
    this.selectedStudent = { ...student };
  }

  closeModal() {
    this.selectedStudent = null;
  }

  updateStatus() {
    if (this.selectedStudent) {
      const index = this.students.findIndex(s => s.id === this.selectedStudent.id);
      if (index !== -1) {
        this.students[index].statut = this.selectedStudent.statut;
        this.filterStudents(); // Rafraîchir la liste
      }
      this.closeModal();
    }
  }

  toggleStatusMenu(student: any) {
    // Ici vous pouvez implémenter un menu contextuel ou dropdown
    console.log('Menu pour:', student);
  }

  getStatusCount(status: string): number {
    return this.students.filter(s => s.statut === status).length;
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'en_attente':
        return 'px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm';
      case 'en_cours':
        return 'px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm';
      case 'valide':
        return 'px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm';
      default:
        return 'px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'en_attente':
        return 'En attente';
      case 'en_cours':
        return 'En cours';
      case 'valide':
        return 'Validé';
      default:
        return status;
    }
  }
}