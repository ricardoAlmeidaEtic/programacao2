import Zoo from "./zoo.js"

window.onload = async() =>{

    const request = await fetch("Data.json");
    const result = await request.json();
    const zoo = new Zoo();
    
    result.forEach(element => {
        zoo.addAnimal(element);
    });

//    const seagull = new Bird("seagull",true)
//    console.log(seagull.fly());
//
//    const kangaroo = new Mamal("kangaroo",2)
//    console.log(kangaroo.walk());
//
//    const humano = new Mamal("humano",2)
//    console.log(humano.walk());
//
//    const sapo = new Reptile("sapo",true)
//    console.log(sapo.agressive());
//
//    const zoo = new Zoo();
//    zoo.addAnimals(seagull);
//    zoo.addAnimals(kangaroo);
//    zoo.addAnimals(sapo);
}