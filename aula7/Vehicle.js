export default class Vehicle{
    speed = 10;
    brand;
    imagePath;
    #image;
    #yPos = 0;

    constructor(data){
        this.speed = data.speed;
        this.brand = data.brand;
        this.imagePath = data.image;

        this.build();
    }

    build(){
        this.#image = document.createElement("img");
        this.#image.src = this.imagePath;
        this.#image.style.width="60%";
        this.#image.style.margin="0% 0% 0% 20%";

        document.body.appendChild(this.#image);
    }

    animate(){
        this.#yPos += 1;
        this.#image.style.transform=`translateY(${this.#yPos}px)`;
        console.log("animation started");
    }

    destroy(){
        document.body.removeChild(this.#image);
    }
}