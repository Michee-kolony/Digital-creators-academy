import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client/client.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { FormationsComponent } from './client/formations/formations.component';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';
import { AuthComponent } from './admin/auth/auth.component';

const routes: Routes = [
  {path:'',  redirectTo: 'academy', pathMatch: 'full'},
  {path:'academy', component: ClientComponent,
    children:[
      {path:"", redirectTo: 'accueil', pathMatch: 'full'},
      {path:'accueil', component: AccueilComponent},
      {path:'nos-formations', component: FormationsComponent},
      {path:'a-propos', component: AboutComponent},
      {path:'contact', component: ContactComponent}
    ]
  },
  {path:'auth_for_admin', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
