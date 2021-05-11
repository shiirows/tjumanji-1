import { NgModule } from '@angular/core';
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
import { TerreComponent } from './terre/terre.component';
import { MarsComponent } from './mars/mars.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { VenusComponent } from './venus/venus.component';
import { MercureComponent } from './mercure/mercure.component';


const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'terre', component: TerreComponent},
  { path: 'mars', component: MarsComponent},
  { path: 'jupiter', component: JupiterComponent},
  { path: 'venus', component: VenusComponent},
  { path: 'mercure', component: MercureComponent},
  { path: '**', component: Page404Component }
];

@NgModule({

  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    Page404Component,
    NavbarComponent,
    TerreComponent,
    MarsComponent,
    JupiterComponent,
    VenusComponent,
    MercureComponent
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
