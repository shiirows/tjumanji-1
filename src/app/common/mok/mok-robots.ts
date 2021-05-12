
import { Robot } from "../models/robot.model";
import { defaultPlanetes } from "./mok-planetes";

export const robots: Robot[] = [
    new Robot(6, 'ema teler', 'https://lh3.googleusercontent.com/proxy/yz7DY-NWDi-7wVrXvLeNoqcmF-FvtPYP-sZh8ARHm_yGdmhDOoesNdKQam9bRV8eQCpyZY9pHvx4mjkb-M8vRSon-eZ2qjAFYPNcdhAeTaOI5jm1', 'femme', 19, 'fan de tv et de film j\'aime le drama ', defaultPlanetes.filter((x) => x.name === 'Mercure')[0]),
    new Robot(5, 'Nono', 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2021/02/perseverance-moxie_big__w770.jpg', 'homme', 25, 'ici pour trouver mon processeur les port audio passer votre chemin ', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
    new Robot(4, 'indrille carcasse', 'https://upload.wikimedia.org/wikipedia/commons/1/18/AEHF_1.jpg', 'femme', 25, 'j\'aime les arts, peindre des carrosserie  sur tôle c\'est ma passion ', defaultPlanetes.filter((x) => x.name === 'Venus')[0]),
    new Robot(3, 'pascable luminium', 'https://cdn.pixabay.com/photo/2013/03/10/15/01/mars-92207_960_720.jpg', 'femme', 43, 'licence en parachutage, j\'aime les sports de haut niveaux ', defaultPlanetes.filter((x) => x.name === 'Terre')[0]),
    new Robot(2, 'Mike Intoch', 'https://cdn.pixabay.com/photo/2015/04/04/23/26/robot-707219_960_720.jpg', 'homme', 26, 'Besoin d\'une modif dans ton BIOS ? appelles-moi', defaultPlanetes.filter((x) => x.name === 'Mars')[0]),
    new Robot(1, 'Mirtille New Horizon', 'http://tpe-aerospatial.e-monsite.com/medias/images/lunokhod2.jpg?fx=r_400_400', 'homme', 54, 'Du kilomètre mais toujours la passion de ces jeunes années', defaultPlanetes.filter((x) => x.name === 'Jupiter')[0]),
   
]