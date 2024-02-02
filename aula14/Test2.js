import MainTest from "./MainTest.js"

class Test2 extends MainTest{
    constructor(name){
        super(name);
    }

    func(){
        return super.func();
    }
}