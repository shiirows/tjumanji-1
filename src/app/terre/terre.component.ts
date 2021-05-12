import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../common/models/robot.model';
import { robots } from '../common/mok/mok-robots';
import { RobotService } from '../common/services/robot.service';

@Component({
  selector: 'app-terre',
  templateUrl: './terre.component.html',
  styleUrls: ['./terre.component.css']
})
export class TerreComponent implements OnInit {

  title: string = 'Messagerie Terre:'

  showChat: boolean = false;

  // tabvleau des robots
  robots: Robot[] = []

      // chats
      messages = {
        me: ['salut', 'ça va bien et toi ?'],
        him: ['salut c\'est moi', 'comment ça va ?']
      }
      // messageInput
      messageInput: string = '';

  constructor(private router: Router, private service: RobotService) { }

  goToMessages(): void{
    this.showChat = true
  }
  setCurrentRobot(robot:Robot): void {
    this.service.currentRobot = robot
    this.router.navigateByUrl("/profileRobot")
    }
    // send message
    sendMessage(message: string): void{
      this.messages.me.push(message)
      this.messageInput = ''
    }

  ngOnInit(): void {
    this.robots = robots.filter((robot) => robot.planet.name === 'Terre')
    if(this.robots.length === 0){
      this.title = 'Messagerie Terre vide.'
    }
  }

}
