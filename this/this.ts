//What will be the result of accessing the object's ref property? Why?
interface IUser {
	name: string,
	ref: any
}

function makeUser(): IUser {
	return {
		name: "John",
		ref: this,
	};
}

let user: IUser = makeUser();

alert( user.ref.name );

//error because "this" must be used like part of method;

//create calc
// read()--get two value
// sum() -- +
// mul() -- *

let calculator = {
  read() {
		let a: string|null = (prompt('First number?', "1"));
		if (a !== null) {
			let aNum: number = +a;
			this.a = aNum;
		} else this.a = 1;

		let b: string|null = (prompt('Second number?', "1"));
		if (b !== null) {
			let bNum: number = +b;
			this.b = bNum;
		} else this.b = 1;
	},

	sum(): number {
		return this.a + this.b;
	},

	mul(): number {
		return this.a * this.b;
	},
};

calculator.read();
alert("sum = " + calculator.sum() );
alert("mul = " + calculator.mul() );

//obj ladder
let ladder: {step: number, up: any, down: any, showStep: Function} = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function(): Function {
		alert( this.step );
		return this;
	}
};

// works as
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// implement methods for allowing this calls
// ladder.up().up().down().showStep().down().showStep();

ladder.up().up().down().showStep().down().showStep();