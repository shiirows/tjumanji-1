import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EspaceMajeurComponent } from './espace-majeur/espace-majeur.component';


const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'majeur', component: EspaceMajeurComponent},
  { path: '**', component: Page404Component },
];

@NgModule({

  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    Page404Component,
    NavbarComponent,
    EspaceMajeurComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
