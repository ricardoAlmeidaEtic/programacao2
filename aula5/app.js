//const fibonnaci = (x,y) => {
//    for (let i = 0; i < 10; i++) {
//        const temp = x;
//        x += y;
//        y = temp;
//        console.log(x);
//    }
//}
//
//fibonnaci(1,0);

let user = {
    id:0,
    nome:"Ricardo",
    age:24,
    gender:"male",
    dob:"16-01-2000",
    hobbies:["skate","surf","cs2","chorar"]
}

console.log(user);

for (const key in user) {
    console.log(key + " - " + user[key]);
}


//class User {
//
//    id;
//    #name;
//    age;
//    gender;
//    dob;
//    hobbies;
//    
//    constructor(user){
//        this.id = user.id;
//        this.#name = user.name;
//        this.age = user.age;
//        this.gender = user.gender;
//        this.dob = user.dob;
//        this.hobbies = user.hobbies;
//    }
//
//    getName(){
//        //console.log("The name is: " + name);
//        return this.name;
//    }
//
//    getAge(){
//        //console.log("The age is: " + age);
//        return this.age;
//    }
//
//    getGender(){
//        //console.log("The gender is: " + gender);
//        return this.gender;
//    }
//
//    getDob(){
//        //console.log("The dob is: " + dob);
//        return this.dob;
//    }
//
//    getHobbies(){
//        //console.log("The hobbies are: " + hobbies);
//        return this.hobbies;
//    }
//}
//
//const newUser = new User(user);
//newUser.name = user.name;
//newUser.gender = user.gender;
//console.log("class: " + newUser.getName());
//console.log("class: " + newUser.getAge());
//console.log("class: " + newUser.getGender());
//console.log("class: " + newUser.getDob());
//console.log("class: " + newUser.getHobbies());

import Motorcycle from './Motorcycle.js';
import Car from './Car.js';

const data = {
    cars:[{
        brand:"ferrari",
        speed:200
    }],
    motorcycles:[{
        brand:"kawasaki",
        speed:200
    }],
    Airplanes:[{
        brand:"a1",
        speed:200
    }],
    Trucks:[{
        brand:"t1",
        speed:200
    }],
    boats:[{
        brand:"b1",
        speed:200
    }]
};

window.onload = () =>{
    console.log("windows loaded.");

    const nav = document.querySelector("nav");
    const vehicle = [];

    const createUL = (key, data) =>{
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = key;
        ul.appendChild(title);

        //ul.appendChild(title);
        //for (const key in dataKey){
        //    ul.append(dataKey[key] + " ")
        //}

        data.forEach(element => {
            const liBrand = document.createElement("li");
            const liSpeed = document.createElement("li");
            const buttonBrand = document.createElement("button");
            const buttonSpeed = document.createElement("button");
            buttonBrand.innerText = element.brand;
            buttonSpeed.innerText = element.speed;
            
            /*===================================*/
            //buttonBrand.onclick = (e) =>{
            //    alert("Carregou no " + key + " na key brand: " + element.brand + ".");
            //}
            //buttonSpeed.onclick = (e) =>{
            //    alert("Carregou no " + key + " na key speed: " + element.speed + ".");
            //}

            switch(key){
                case "cars":
                    vehicle.push(new Car (data));
                    break;

                case "motorcycles":
                    vehicle.push(new Motorcycle (data));
                    break;
            }


            /*===================================*/

            liBrand.appendChild(buttonBrand);
            liSpeed.appendChild(buttonSpeed);
            ul.appendChild(liBrand);
            ul.appendChild(liSpeed);
        });
        
        nav.appendChild(ul);
    }
    
    console.log(vehicle);

    for(const key in data){
        createUL(key,data[key]);
    }
}

const car = new Car();
const motorcycle = new Motorcycle();

