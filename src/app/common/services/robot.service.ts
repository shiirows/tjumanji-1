import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Message } from '../models/message.model';
import { Robot } from '../models/robot.model';
import { defaultPlanetes } from '../mok/mok-planetes';
import { robots } from '../mok/mok-robots';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  public currentRobot: Robot
  // robot connecté
  public connected: Robot = new Robot(0, 'Philip Ignon', 'http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2006/01/exomars_rover/9807445-3-eng-GB/ExoMars_rover_pillars.jpg', 'homme', 20, 'Je saurais graisser vos écrous', defaultPlanetes.filter((x) => x.name === 'Mars')[0]);
}
