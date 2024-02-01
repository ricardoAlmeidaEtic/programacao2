import Animal from "./Animal.js";

export default class Insect extends Animal {

    #canFly;
    #data;

    constructor(data, callback) {
        super(data, callback);
        this.#data = data;
        this.#canFly = this.#data.canFly;

    }

    introduce() {
        let parentIntroduce = super.introduce();
        return this.#canFly ? 
        parentIntroduce + " and I can fly" :
        parentIntroduce + " and I can't fly";
    }
}