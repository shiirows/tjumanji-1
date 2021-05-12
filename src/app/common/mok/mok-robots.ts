
import { Robot } from "../models/robot.model";
import { defaultPlanetes } from "./mok-planetes";

export const robots: Robot[] = [
    new Robot(2, 'Mike Intoch', 'https://cdn.pixabay.com/photo/2015/04/04/23/26/robot-707219_960_720.jpg', 'homme', 26, 'Besoin d\'une modif dans ton BIOS ? appelles-moi', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
    new Robot(1, 'Mirtille New Horizon', 'http://tpe-aerospatial.e-monsite.com/medias/images/lunokhod2.jpg?fx=r_400_400', 'homme', 54, 'Du kilomètre mais toujours la passion de ces jeunes années', defaultPlanetes.filter((x) => x.name === 'Jupiter')[0]),
]