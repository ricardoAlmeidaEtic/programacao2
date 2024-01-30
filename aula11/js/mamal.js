import Animal from "./animal.js";

export default class Mamal extends Animal{
    
    #numlegs;
    constructor(name,numlegs){
        super(name);

        this.#numlegs = numlegs;
    }

    walk(){
        return this.introduce() + "walking on "+this.#numlegs+" legs.";
    }
}