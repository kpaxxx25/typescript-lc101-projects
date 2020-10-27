import {Payload} from './Payload';


export class Cargo implements Payload{
    massKG: number;
    material: string;

    constructor(massKG:number, material: string){
        this.massKG = massKG,
        this.material = material;
    }
}