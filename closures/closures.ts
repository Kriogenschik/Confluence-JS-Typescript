let name2: string = "John";

function sayHi() : void {
	alert("Hi, " + name2);
}

name2 = "Pete";

sayHi(); 

// Hi, Pete

//two counters, counter and counter2, using the same makeCounter function.
//Are they independent? What will the second counter show? 0.1 or 2.3 or something else?

function makeCounter(): Function {
	let count: number = 0;

	return function(): number {
		return count++;
	};
}

let counter: Function = makeCounter();
let counter2: Function = makeCounter();

alert( counter() );
alert( counter() );

// 0 1

alert( counter2() );
alert( counter2() );

// 0 1

//Here the counter object is created using the constructor function.
//Will it work? What will show?

function Counter(): void {
	let count: number = 0;

	this.up = function(): number {
		return ++count
	};

	this.down = function(): number {
		return --count;
	};
}

let counter3 = new Counter();

alert( counter3.up() );
alert( counter3.up() );
alert( counter3.down() );

// 1 2 1

//Look at the code. What will be the result of the call on the last line?

let phrase: string = "Hello";

if (true) {
	let user: string = "John";

	function sayHi2(): void {
		alert(`${phrase}, ${user}`);
	}
}

sayHi2();

// error if we use "use strict" and  Hello, John if we don`t

//Write a sum function that works like this: sum(a)(b) = a+b.

function sum(a: number): Function {
	return function(b: number): number {
		return a + b;
	}
};

console.log(sum(1)(2));
console.log(sum(5)(-1));
