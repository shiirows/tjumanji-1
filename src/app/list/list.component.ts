import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../common/models/robot.model';
import { robots } from '../common/mok/mok-robots';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title: string = 'Messagerie:'

  // tabvleau des robots
  robots: Robot[] = []

  constructor(private router: Router) { }

  goToMessages(): void{
    this.router.navigateByUrl('/message')
  }

  ngOnInit(): void {
    this.robots = robots
  }

}
