var name2 = "John";
function sayHi() {
    alert("Hi, " + name2);
}
name2 = "Pete";
sayHi();
// Hi, Pete
//two counters, counter and counter2, using the same makeCounter function.
//Are they independent? What will the second counter show? 0.1 or 2.3 or something else?
function makeCounter() {
    var count = 0;
    return function () {
        return count++;
    };
}
var counter = makeCounter();
var counter2 = makeCounter();
alert(counter());
alert(counter());
// 0 1
alert(counter2());
alert(counter2());
// 0 1
//Here the counter object is created using the constructor function.
//Will it work? What will show?
function Counter() {
    var count = 0;
    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}
var counter3 = new Counter();
alert(counter3.up());
alert(counter3.up());
alert(counter3.down());
// 1 2 1
//Look at the code. What will be the result of the call on the last line?
var phrase = "Hello";
if (true) {
    var user_1 = "John";
    function sayHi2() {
        alert("".concat(phrase, ", ").concat(user_1));
    }
}
sayHi2();
// error if we use "use strict" and  Hello, John if we don`t
//Write a sum function that works like this: sum(a)(b) = a+b.
function sum(a) {
    return function (b) {
        return a + b;
    };
}
;
console.log(sum(1)(2));
console.log(sum(5)(-1));
