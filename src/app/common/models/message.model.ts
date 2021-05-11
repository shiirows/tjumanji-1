import {Robot} from './robot.model';
export class Message {
    public sender: Robot
    public message: string
constructor(sender:Robot, message:string){
    this.sender = sender
    this.message = message
}
}