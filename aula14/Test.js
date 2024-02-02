import MainTest from "./MainTest.js"

class Test extends MainTest{
    constructor(name){
        super(name);
    }

    func(){
        return super.func();
    }
}