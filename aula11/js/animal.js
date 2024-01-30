export default class Animal{
    
    #name;
    constructor(name){
        this.#name = name;
    }

    introduce(){
        return "hello, im a" + this.#name;
    }
}