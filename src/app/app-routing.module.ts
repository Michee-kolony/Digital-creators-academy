import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client/client.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { FormationsComponent } from './client/formations/formations.component';

const routes: Routes = [
  {path:'',  redirectTo: 'academy', pathMatch: 'full'},
  {path:'academy', component: ClientComponent,
    children:[
      {path:"", redirectTo: 'accueil', pathMatch: 'full'},
      {path:'accueil', component: AccueilComponent},
      {path:'nos-formations', component: FormationsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
