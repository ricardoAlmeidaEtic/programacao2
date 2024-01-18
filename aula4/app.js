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

const car = new Car();
const motorcycle = new Motorcycle();