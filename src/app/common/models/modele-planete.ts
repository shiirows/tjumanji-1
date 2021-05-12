export class Planete {

    public name: string
    public img: string
    public density: number
    public gravity: number
    public aroundPlanet: string
    public distanceMars: string
    constructor(name: string,img: string,  density: number, gravity: number, aroundPlanet: string, distanceMars: string){
        this.name=name
        this.img=img
        this.distanceMars=distanceMars
        this.density=density
        this.gravity=gravity
        this.aroundPlanet=aroundPlanet
    }
}