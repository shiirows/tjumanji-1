import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Robot } from '../common/models/robot.model';
import { robots } from '../common/mok/mok-robots';
import { RobotService } from '../common/services/robot.service';

@Component({
  selector: 'app-mercure',
  templateUrl: './mercure.component.html',
  styleUrls: ['./mercure.component.css']
})
export class MercureComponent implements OnInit {

  title: string = 'Messagerie Mercure:'

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
  
    // send message
    sendMessage(message: string): void{
      this.messages.me.push(message)
      this.messageInput = ''
    }

  ngOnInit(): void {
    this.robots = robots.filter((robot) => robot.planet.name === 'Mercure')
    if(this.robots.length === 0){
      this.title = 'Messagerie Mercure vide.'
    }
  }


}
