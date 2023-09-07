//difference between global, local, function scope

// JavaScript has only one global scope and variables from global scope are accessible in all other scopes.
// SCope inside any block is local scope. Any block has her own local scope. Variables in local scope can be accesed only inside block.
//Function scope is a type of local scope. It`s accessible inside function.

//examples:

let newName: string = "John"; //global scope
let newAge: number = 30; //global scope / accessible everywhere

if (true) {
	let x: string = "30px" // local scope / accessible only inside this block
}

function localScope(y: number|string): void {
	let number = 101; // function scope / accessible only inside this function

	if (typeof y === "number") {
		console.log( y + number);
	} else {
		console.log(`${y} : ${number}`);
	}
}