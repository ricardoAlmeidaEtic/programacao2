
import Vehicle from './Vehicle.js';

export default class Motorcycle extends Vehicle{
    constructor(data){
        super(data);
        this.speed = 50;
        console.log(this.speed);
    }
}