import Animal from "./Animal.js";

export default class Fish extends Animal {

    #isFreshWater;
    #data;

    constructor(data, callback) {
        super(data, callback);
        this.#data = data;
        this.#isFreshWater = this.#data.isFreshWater;

    }

    introduce() {
        let parentIntroduce = super.introduce();
        return this.#isFreshWater ? 
        parentIntroduce + " and i live in fresh water ><(((*> " :
        parentIntroduce + " and i live in salt water ><(((*> ";
    }
}