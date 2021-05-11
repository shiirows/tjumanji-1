import { Injectable } from '@angular/core';
import { Robot } from '../models/robot.model';
import { robots } from '../mok/mok-robots';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor() { }

  // getRobotById
  public getRobotById(id: number): Robot{
    return robots.find((robot) => robot.id === id)
  }
}
