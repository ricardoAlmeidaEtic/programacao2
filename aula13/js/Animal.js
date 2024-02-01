export default class Animal {

    #data;
    #callback;
    #imageElem;
    #sound;
    #type;
    #image;
    constructor(data, callback) {
        this.#imageElem = document.createElement("img");
        const container = document.querySelector("#images-container");

        this.#data = data;
        this.#callback = callback;
        this.#imageElem.src = this.#data.image;
        this.#imageElem.onclick = () => this.#callback();

        container.appendChild(this.#imageElem);
    }

    introduce() {
        return "Hello, I'm a " + this.#data.name;
    }
    
    get sound() {
        return this.#data.sound;
    }
    
    get type() {
        return this.#data.type;
    }
    
    get name() {
        return this.#data.name;
    }
    
    set name(value) {
        this.#data.name = value;
    }

    get image() {
        return this.#data.image;
    }

    get active(){
        return this.#imageElem.className.length !== 0;
    }

    set active(value){
        this.#imageElem.className  = value ? "active" : "";
    }
}