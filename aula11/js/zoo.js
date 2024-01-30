import Bird from "./bird.js"
import Mamal from "./mamal.js"
import Reptile from "./reptile.js"

export default class Zoo{
    #animals
    constructor(){
        this.#animals = [];
    }

    addAnimal(animal){
        switch(animal.type){    
            case 'Bird':
                this.#animals.push(new Bird(animal));
                break;
            case 'Mamal':
                this.#animals.push(new Mamal(animal));
                break;
            case 'Reptile':
                this.#animals.push(new Reptile(animal));
                break;
            default:
                break;
        }
    }

    showAnimals(){
        this.#animals.forEach(element,() =>{
            console.log(element.introduce());
        });
    }

    getAnimal(name){
        return this.#animals.find(animal => animal.name === name);
    }
}