console.log("hello world js")

var a = "var a";
var b = "var b";
var c = "var c";

console.log(a);
console.log(b);
console.log(c);

const func = () =>{
    console.log("func js called");
}

func();

import Test from "./Test.js"
import Test2 from "./Test2.js"

const test1 = new Test('test1');
console.log(test1.func());

const test2 = new Test2('test2');
console.log(test2.func());