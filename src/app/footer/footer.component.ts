import { Component, OnInit } from '@angular/core';
import {SocialMedia} from '../common/social.model';
import {ResSociauxService} from '../res-sociaux.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
// tableau des réseaux sociaux
resSociaux: SocialMedia[] = [];

// récupérer la date actuelle
dateCopyright: number;


  constructor(private service: ResSociauxService) { }

  ngOnInit(): void {
    // récupérer la date actuelle (année)
    this.dateCopyright = new Date().getFullYear();
    // initialiser le tableau des réseaux sociaux
    this.resSociaux = this.service.initReseaux();
  }

}
