import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
// tableau des réseaux sociaux


// récupérer la date actuelle
dateCopyright: number;


  constructor() { }

  ngOnInit(): void {
    // récupérer la date actuelle (année)
    this.dateCopyright = new Date().getFullYear();
    // initialiser le tableau des réseaux sociaux
   
  }

}
