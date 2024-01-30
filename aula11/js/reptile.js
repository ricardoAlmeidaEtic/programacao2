import Animal from "./animal.js";

export default class Reptile extends Animal{
    
    #name;
    #isAgressive;
    constructor(name,isAgressive){
        super(name);
        this.#name = name;
        this.#isAgressive = isAgressive;
    }

    agressive(){
        return this.#isAgressive ?
            (this.introduce() + "and is agressive") :
            (this.introduce() + "and isnt agressive");
    }
}