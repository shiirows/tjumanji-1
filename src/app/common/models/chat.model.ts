import { Message } from "./message.model";
import { Robot } from "./robot.model";

export class Chat {
    public robot1: Robot
    public robot2: Robot
    public message: Message[]
constructor(robot1:Robot, robot2:Robot, message: Message[]){
    this.robot1=robot1
    this.robot2=robot2
    this.message=message
}
}