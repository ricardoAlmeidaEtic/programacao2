const addNumbers = (a,b) => {
    return a + b;
}

//console.log(addNumbers(1,2));

//let a = 10;
//let b = "100";
//
//if(a === "10" && a == "100"){
//    console.log(true)
//} else{
//    console.log(false)
//}
//
//if(a === "10" || a == "100"){
//    console.log(true)
//} else{
//    console.log(false)
//}

//a=="10"?console.log(true):console.log(false);

//switch(a){
//    case 10:
//        console.log(true);
//        break;
//    case 10:
//        console.log(true);
//        break;
//    case 10:
//        console.log(true);
//        break;
//    case 10:
//        console.log(true);
//        break;
//    case 10:
//        console.log(true);
//        break;
//    default:
//        console.log(true);
//        break;
//}

//let a = 0;
//
//while(a<20){
//    console.log(a);
//    a = a + 1;
//}

let arr =["cidade","praia","floresta","campo","indonesia","portugal","faro","lagos"]

//for(let i = 0; i<arr.length; i++){
//    console.log(arr[i]);
//}

arr.forEach(element => {
   console.log(element); 
});

let obj = {
    name: "bruno",
    idade: 46,
    gender: "male",
}

console.log(obj["bruno"]);

for(const key in obj){
    console.log(obj[key]);
}