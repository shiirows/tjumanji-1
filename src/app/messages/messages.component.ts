import { Component, OnInit } from '@angular/core';
import { Robot } from '../common/models/robot.model';
import { robots } from '../common/mok/mok-robots';
import { RobotService } from '../common/services/robot.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // liste des robots
  robots: Robot[] = []
  // chats
  messages = {
    me: ['salut', 'ça va bien et toi ?'],
    him: ['salut c\'est moi', 'comment ça va ?']
  }
  // messageInput
  messageInput: string = '';

  constructor(private service: RobotService) { }

  // send message
  sendMessage(message: string): void{
    this.messages.me.push(message)
    this.messageInput = ''
  }

  ngOnInit(): void {
    this.robots = robots
  }

}
