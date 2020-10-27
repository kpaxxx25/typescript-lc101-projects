import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
import {Payload} from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronaut: Astronaut[] = [];

    constructor(name: string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]):number{
        let totalMass: number = 0;
        for(let i=0; i<items.length; i++){
            totalMass += items[i].massKG
        }
        return totalMass;
    };
    currentMass():number{
       return this.sumMass(this.cargoItems) + this.sumMass(this.astronaut)
    };
    canAdd(item: Payload):boolean{
        if(this.currentMass()+ item.massKG <= this.totalCapacityKg){        
        return true;
        }
        else{
        return false;
      }
    };
    addCargo(cargo: Cargo): boolean{
       if(this.canAdd(cargo)){
           this.cargoItems.push(cargo);
           return true;
       }
       else{
           return false;
       }
    };
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronaut.push(astronaut);
            return true;
        }
        else{
            return false;
        }
     };

}