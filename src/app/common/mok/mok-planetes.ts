import { Planete } from "../models/modele-planete";

export const defaultPlanetes: Planete[]=[
    new Planete(
        'Mars',
        '../../assets/planetes/MarsPlanete.jpg',
        
        3.93410,
        3.71000,
       "Terre,Jupiter"
      ),
      new Planete(
        'Terre',
        '../../assets/planetes/Terre.jpg',
        
        5.51360,
        9.80000,
       "Venus, Mars"
      ),
      new Planete(
        'Venus',
        '../../assets/planetes/Venus.png',
        
        5.24300,
        8.87000,
       "Mercure,Terre"
      ),
      new Planete(
        'Mercure',
        '../../assets/planetes/Mercure.jpg',
        
        5.42910,
        3.70000,
       "Venus"
      ),
      new Planete(
        'Jupiter',
        '../../assets/planetes/Jupiter.jpg',
        
        2,
        2,
       "Saturne, Mars"
      ),
      new Planete(
        'Saturne',
        '../../assets/planetes/Saturne.jpg',
        
        0.68710,
        10.44000,
       "Jupiter, Uranus"
      ),
      new Planete(
        'Uranus',
        '../../assets/planetes/Uranus.jpg',
        
        2,
        2,
       "Neptune, Saturne"
      ),
      new Planete(
        'Neptune',
        '../../assets/planetes/Neptune.jpg',
        
        2,
        2,
       "Uranus"
      ),

]