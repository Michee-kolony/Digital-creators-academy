import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { ClientComponent } from './client/client/client.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FaqComponent } from './client/faq/faq.component';
import { GalerieComponent } from './client/galerie/galerie.component';
import { FormationsComponent } from './client/formations/formations.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';
import { AuthComponent } from './admin/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ClientComponent,
    NavbarComponent,
    FaqComponent,
    GalerieComponent,
    FormationsComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
