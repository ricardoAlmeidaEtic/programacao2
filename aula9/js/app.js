console.log("1");

window.onload = () =>{
    console.log("document loaded started");
}

console.log("2");

const funcAdd = (a,b) =>{
    return a+b;
}

console.log("Resultado: ",funcAdd(5,2));

const funcMultiply = (a,b) =>{
    return a*b;
}

console.log("Resultado: ",funcMultiply(5,2));

let resultado = funcMultiply(funcAdd(5,2),2);
console.log(resultado);

const array = [2,45,35,2];

const funcArray = (array) =>{
    let soma = 0;
    array.forEach(element => {
        soma +=element;
    });

    return soma / array.length;
}

console.log("media", funcArray(array));


const funcAddFunc = (array) =>{
    
    array.forEach(element => {
       element++;
       console.log(element) ;
    });

}

console.log("array: ",funcAddFunc(array));

test = new Test();

const result = test.shownumber();
console.log(result);


class Test {
    constructor(){
        super ();
    }

    shownumber(){
        return 2;
    }
}