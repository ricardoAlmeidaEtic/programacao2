import Animal from "./animal.js";

export default class Bird extends Animal{
    #canFly
    constructor(name,canFly){
        super(name);
        this.#canFly = canFly;
    }

    fly(){
        this.#canFly ?
            (this.introduce() + "and i can fly") :
            (this.introduce() + "and i cant fly");
    }
}