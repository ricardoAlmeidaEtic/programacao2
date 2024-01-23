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
//
import Motorcycle from './Motorcycle.js';
import Car from './Car.js';
import Boat from './Boat.js';
//
//const data = {
//    cars:[{
//        brand:"ferrari",
//        speed:200
//    }],
//    motorcycles:[{
//        brand:"kawasaki",
//        speed:200
//    }],
//    Airplanes:[{
//        brand:"a1",
//        speed:200
//    }],
//    Trucks:[{
//        brand:"t1",
//        speed:200
//    }],
//    boats:[{
//        brand:"b1",
//        speed:200
//    }]
//};
//
//window.onload = () =>{
//    console.log("windows loaded.");
//
//    const nav = document.querySelector("nav");
//    const vehicle = [];
//
//    const createUL = (key, data) =>{
//        const ul = document.createElement("ul");
//        const title = document.createElement("li");
//        title.innerText = key;
//        ul.appendChild(title);
//
//        //ul.appendChild(title);
//        //for (const key in dataKey){
//        //    ul.append(dataKey[key] + " ")
//        //}
//
//        data.forEach(element => {
//            const liBrand = document.createElement("li");
//            const liSpeed = document.createElement("li");
//            const buttonBrand = document.createElement("button");
//            const buttonSpeed = document.createElement("button");
//            buttonBrand.innerText = element.brand;
//            buttonSpeed.innerText = element.speed;
//            
//            /*===================================*/
//            //buttonBrand.onclick = (e) =>{
//            //    alert("Carregou no " + key + " na key brand: " + element.brand + ".");
//            //}
//            //buttonSpeed.onclick = (e) =>{
//            //    alert("Carregou no " + key + " na key speed: " + element.speed + ".");
//            //}
//
//            switch(key){
//                case "cars":
//                    vehicle.push(new Car (data));
//                    break;
//
//                case "motorcycles":
//                    vehicle.push(new Motorcycle (data));
//                    break;
//            }
//
//
//            /*===================================*/
//
//            liBrand.appendChild(buttonBrand);
//            liSpeed.appendChild(buttonSpeed);
//            ul.appendChild(liBrand);
//            ul.appendChild(liSpeed);
//        });
//        
//        nav.appendChild(ul);
//    }
//    
//    console.log(vehicle);
//
//    for(const key in data){
//        createUL(key,data[key]);
//    }
//}
//
//const car = new Car();
//const motorcycle = new Motorcycle();

let currentVehicle = null;

const loadData = async(url) =>{
    
    const request = await fetch(url);
    const result = await request.json();

    return result;
}

const createLiContent = (item, ul) =>{
    const title = document.createElement("h1");
    const liBrand = document.createElement("li");
    const liSpeed = document.createElement("li");
    const button = document.createElement("button");
    
    title.innerText = item.type; 
    liBrand.innerHTML = "Brand: <a href="+item.brand+">" + item.brand + "</a>"; 
    liSpeed.innerHTML = "Top Speed: " + item.speed + " km/h"; 
    button.innerText = "BUY NOW"; 

    liBrand.style="list-style-type: none;"
    liSpeed.style="list-style-type: none;"
    title.style.color="blue"
    
    ul.appendChild(title);
    ul.appendChild(liBrand);
    ul.appendChild(liSpeed);
    ul.appendChild(button);

    button.addEventListener("click", () => {
        console.log("button clicked");
    })
    
    button.onclick = () =>{
        
        if(buttonPause.className === "inactive"){
            buttonPause.className = "";
        }

        if(currentVehicle != null){
            currentVehicle.destroy();
        }

        switch (item.type) {
            case 'Car':
                currentVehicle = new Car(item);
                break;
            case 'Motorcycle':
                currentVehicle = new Motorcycle(item);
                break;
            case 'Boat':
                currentVehicle = new Boat(item);
                break;
            default:
                break;
        }

        console.log("Vehicle: " + currentVehicle);

        window.scrollTo({
            top:100000,
            left:0,
            behavior:"smooth"
        });
    }
    

    return ul;
}

const createList = async(data) =>{
    let ul = document.querySelector("ul");
    
    data.forEach(element => {
        const title = document.createElement("h1");
        title.innerText = element.type; 
        title.style.color="blue"
        
        ul = createLiContent(element,ul);

        //ul.innerHTML += "<h1>"+element.type+"</h1>"; 
        //ul.innerHTML += "<li>Brand: <a href="+element.brand+">" + element.brand + "</a></li>";
        //ul.innerHTML += "<li>Top Speed: " + element.speed + " km/h</li>";
        
    });
}

//window.onload = async() =>{
//    const data = await loadData("Data.json");
//    data.sort((a,b) => a.type.localeCompare(b.type));
//    const ul = createList(data);
//}

let buttonPause;
let timer;
let num;

const play = () =>{
    timer = setInterval(() => {
        console.log(num++)
    },100)
    buttonPause.innerText="pause";
    buttonPause.className="red";
}

const stop = () =>{
    clearInterval(timer);
    timer = null;
    console.log("paused");
    buttonPause.innerText="play";
    buttonPause.className="green";
}

const animate = () =>{
    console.log("new animation frame");
    timer = requestAnimationFrame(animate);
    currentVehicle.animate();
}

const playAnimation = () =>{
    timer = requestAnimationFrame(animate);
    console.log(timer);
    buttonPause.innerText="pause";
    buttonPause.className="red";
}

const stopAnimation = () =>{
    cancelAnimationFrame(timer);
    timer = null;
    buttonPause.innerText="play";
    buttonPause.className="green";
}

window.addEventListener("load", async () =>{
    buttonPause = document.getElementById("pause");
    num = 0;
    timer = null;
    buttonPause.innerText="play";
    const data = await loadData("Data.json");
    data.sort((a,b) => a.type.localeCompare(b.type));
    createList(data);

    button.addEventListener("click", () => {
        timer ? stopAnimation() : playAnimation();
    })

    
})