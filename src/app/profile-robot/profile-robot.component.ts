import { Component, OnInit } from '@angular/core';
import { Robot } from '../common/models/robot.model';
import { RobotService } from '../common/services/robot.service';

@Component({
  selector: 'app-profile-robot',
  templateUrl: './profile-robot.component.html',
  styleUrls: ['./profile-robot.component.css']
})
export class ProfileRobotComponent implements OnInit {

  public infoRobot: Robot;

  constructor(public service: RobotService) {}

  

  ngOnInit(): void {
    this.infoRobot = this.service.currentRobot;
  }

}
