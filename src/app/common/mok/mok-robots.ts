
import { Robot } from "../models/robot.model";
import { defaultPlanetes } from "./mok-planetes";

export const robots: Robot[] = [
    new Robot(2, 'Mike Intoch', 'https://cdn.pixabay.com/photo/2015/04/04/23/26/robot-707219_960_720.jpg', 'homme', 26, 'Besoin d\'une modif dans ton BIOS ? appelles-moi', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
]