import { Component, OnInit } from '@angular/core';
import { Robot } from '../common/models/robot.model';
import { RobotService } from '../common/services/robot.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // réccupérer le user connecté depuis le service
  public infoRobot: Robot;

  constructor(public service: RobotService) {}

  ngOnInit(): void {
    this.infoRobot = this.service.connected;
  }
}
