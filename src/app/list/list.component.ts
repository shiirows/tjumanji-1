import { Component, OnInit } from '@angular/core';
import { Robot } from '../common/models/robot.model';
import { robots } from '../common/mok/mok-robots';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // tabvleau des robots
  robots: Robot[] = []

  constructor() { }

  ngOnInit(): void {
    this.robots = robots
  }

}
