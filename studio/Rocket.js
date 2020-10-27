"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronaut = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKG;
        }
        return totalMass;
    };
    ;
    Rocket.prototype.currentMass = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronaut);
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMass() + item.massKG <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronaut.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    return Rocket;
}());
exports.Rocket = Rocket;
