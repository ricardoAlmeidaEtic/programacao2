import Vehicle from './Vehicle.js';

export default class Car extends Vehicle{
    constructor(){
        super();
        console.log(this.speed);
    }
}