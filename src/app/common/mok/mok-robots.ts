import { Robot } from "../model/robot.model";
import { defaultPlanetes } from "./mok-planetes";

export const robots: Robot[] = [
    new Robot(0, 'Philip Ignon', 'http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2006/01/exomars_rover/9807445-3-eng-GB/ExoMars_rover_pillars.jpg', 'homme', 20, 'Je saurais graisser vos écrous', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
    new Robot(1, 'Mirtille New Horizon', 'http://tpe-aerospatial.e-monsite.com/medias/images/lunokhod2.jpg?fx=r_400_400', 'homme', 54, 'Du kilomètre mais toujours la passion de ces jeunes années', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
    new Robot(2, 'Mike Intoch', 'https://cdn.pixabay.com/photo/2015/04/04/23/26/robot-707219_960_720.jpg', 'homme', 26, 'Besoin d\'une modif dans ton BIOS ? appelles-moi', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
]