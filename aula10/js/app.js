//window.onload = () =>{
//    let a = 5;
//    let b = 5;
//    
//    console.log("a",a);
//    console.log("b",b);
//    
//    [a,b] = [b,a]; 
//    
//    console.log("a",a);
//    console.log("b",b);
//}

/*-----------------------------------------*/

const isEven = (value) =>{
    return value %2 === 0?"isEven": "isOdd";
}

console.log(isEven(1));

/*-----------------------------------------*/

const arr = [2,23,123,123,123];

for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

const addNumb = (a,b) =>{
    return a + b;
}

console.log(addNumb(1,2));

const obj = {
    nome :"nome",
    idade:69,
    genero:"masculo"
};

console.log(obj);

//const button = document.querySelector("button");
//const p = document.querySelector("p");
//
//button.onclick = () =>{
    //    p.innerText= "button clicked";
    //}
    
    const func = async() =>{
        const request = await fetch("Data.json");
        const result = await request.json();
        
        console.log(result);
        
    }
    
    func();
    
    //window.onload = () =>{
    //    const func = (obj) =>{
    //        obj.name = "joana"
    //    }
    //    
    //    const obj = {
    //        name : "bruno"
    //    }
    //    
    //    console.log(obj)
    //    func(obj);
    //    console.log(obj)
//
    //    const test = new Test(() =>{
    //        newText = "E ORA BOAS";
    //    });
    //    test.width = 100;
    //    test.height = 100;
    //    test.background = "black";
//
    //}
    
class Test {
    #name="Ricardo Almeida";
    #age=24;
    #gender="masculo";
    #view;
    width = 100;
    height = 100;
    background = "red";
    text;
    #callback;
    
    constructor(callback){
        this.#callback = callback;
        console.log("ENTROU NO TEST")
        this.#view = document.createElement("div");
        this.#view.style.width=this.width+"px";
        this.#view.style.height=this.height+"px";
        this.#view.style.backgroundColor=this.background;
        this.text = document.createElement("h1");
        this.#view.appendChild(this.text)

        this.#view.onclick = () =>{
            this.#callback();
            this.text.innerText = newText;
        };

        document.body.appendChild(this.#view);

    }

    setElement(element){
        this.#view.appendChild(element);
    }
    
    getName(){
        return this.#name;
    }
    
    getAge(){
        return this.#age;
    }
    
    getGender(){
        return this.#gender;
    }
    
    setName(name){
        this.#name = name;
    }
    
    setAge(age){
        this.#age = age;
    }
    
    setGender(gender){
        this.#gender = gender;
    }
    
    get background(){

    }
    
    set background(value) {
        this.#view.style.backgroundColor = value;
    }

    get height(){
        
    }
    
    set height(value) {
        this.#view.style.height = value + "px";
    }

    get width(){
        
    }

    set width(value) {
        this.#view.style.width = value + "px";
    }
}

window.onload = () =>{
    const test = new Test2(() =>{
        newText = "E ORA BOAS2";
    });
}

class Test2 {
    #view;
    text;
    #callback;
    
    constructor(callback){
        this.#callback = callback;
        this.#view = document.createElement("div");
        this.text = document.createElement("h1");
        this.#view.appendChild(this.text)
        this.#view.style.height="100px"
        this.#view.style.width="100px"
        this.#view.style.backgroundColor="red"

        this.#view.onclick = () =>{
            this.#callback();
            this.text.innerText = newText;
        };

        document.body.appendChild(this.#view);

    }
}

