import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-majeur',
  templateUrl: './espace-majeur.component.html',
  styleUrls: ['./espace-majeur.component.css']
})
export class EspaceMajeurComponent implements OnInit {

public message = "no no no"

  constructor() { }

  ngOnInit(): void {
  }

  alert(){
    alert(this.message);
  }

}
