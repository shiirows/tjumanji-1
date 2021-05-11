import { Planete } from './modele-planete';

export class Robot {
  public id: number;
  public pseudo: string;
  public image: string;
  public sexe: string;
  public age: number;
  public description: string;
  public planet: Planete;
  constructor(
    id: number,
    pseudo: string,
    image: string,
    sexe: string,
    age: number,
    description: string,
    planet: Planete,
  ) {
    this.id = id
    this.pseudo = pseudo;
    this.image = image;
    this.age = age;
    this.description = description;
    this.planet = planet;
  }
}
