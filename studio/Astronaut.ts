import {Payload} from './Payload';


export class Astronaut implements Payload{
    massKG: number;
    name: string;

    constructor(massKG: number, name: string){
        this.massKG = massKG,
        this.name = name
    }
}