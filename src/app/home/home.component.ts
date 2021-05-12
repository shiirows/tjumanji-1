import { Component, OnInit } from '@angular/core';
import { Planete } from '../common/models/modele-planete';
import { News } from '../common/models/news.model';
import { defaultPlanetes } from '../common/mok/mok-planetes'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // les news
  public news: News[] = [];

  //Carousel
  public planetes:Planete[]= [];

  constructor() { }

  ngOnInit(): void {
    this.planetes= defaultPlanetes;
    this.news.push(new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'Nouvel inscrit', 'Un utilisateur est arrivé sur la plateforme'),
    new News('https://www.cloture-discount.fr/3875-big_default_2x/boulon-de-jambe-de-force.jpg', 'Besoin d\'étirer son écrou ?', 'La nouvelle graisse vous fera obtenir plus de volume'),
    new News('data:image/jpeg;base64,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', 'Hot bots', 'Tu cherches des robots chauds dans le système solaire ?'),)
  }

}
