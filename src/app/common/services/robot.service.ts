import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Message } from '../models/message.model';
import { Robot } from '../models/robot.model';
import { robots } from '../mok/mok-robots';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
// tableau des conversations entre robots 
public chatList: Chat[];
  constructor() { }

  // getRobotById
  public getRobotById(id: number): Robot{
    return robots.find((robot) => robot.id === id)
  }
  // function pour commencer le chat entre 2 robots
  public startChat(chat:Chat){
    this.chatList.push(chat)
  }
  //function pour envoyé un message sur le chat
  public sendMessage(chat:Chat,message:Message){
    this.chatList.find((chat) => chat.robot1 === message.sender || chat.robot2 === message.sender)
    chat.message.push(message)
  }
}
