import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client/client.component';
import { AccueilComponent } from './client/accueil/accueil.component';

const routes: Routes = [
  {path:'',  redirectTo: 'academy', pathMatch: 'full'},
  {path:'academy', component: ClientComponent,
    children:[
      {path:"", redirectTo: 'accueil', pathMatch: 'full'},
      {path:'accueil', component: AccueilComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
