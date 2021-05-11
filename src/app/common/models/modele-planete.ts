export class Planete {

    public name: string
    public img: string
   
    public density: number
    public gravity: number
    public aroundPlanet: string
    constructor(name: string,img: string,  density: number, gravity: number, aroundPlanet: string){
        this.name=name
        this.img=img
        
        this.density=density
        this.gravity=gravity
        this.aroundPlanet=aroundPlanet
    }
}