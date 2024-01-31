export default class AudioPlayer {

    #audio;
    constructor() {
        this.#audio = document.querySelector("audio");
        const button = document.querySelector("button");

        button.onclick = () =>{
            this.stop();
        };
    }

    play(src) {
        this.#audio.src = src;
        this.#audio.play();
    }

    stop() {
        this.#audio.src = "";
        this.#audio.pause();
    }
}