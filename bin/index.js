#! /usr/bin/env node

class Test {
    constructor() {
        this.val = null;
        this.test1 = "Hello World!";
        this.test0 = "It works!";
    }
    static test() {
        console.log(this.val);
        console.log(this.test1);
        console.log(this.test0);
    }
}

Test.test();