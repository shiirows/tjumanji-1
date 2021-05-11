import { Component, OnInit } from '@angular/core';
import { News } from '../common/models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // les news
  public news: News[] = []

  constructor() { }

  ngOnInit(): void {
    this.news.push(new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'Nouvel inscrit', 'Un utilisateur est arrivé sur la plateforme'),
    new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'Nouvel inscrit', 'Un utilisateur est arrivé sur la plateforme'),
    new News('https://i.pinimg.com/originals/61/de/d9/61ded9f535761631957d6ae12326a957.jpg', 'Nouvel inscrit', 'Un utilisateur est arrivé sur la plateforme'),)
  }

}
