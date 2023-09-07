function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}
var user = makeUser();
alert(user.ref.name);
//error because "this" must be used like part of method;
//create calc
// read()--get two value
// sum() -- +
// mul() -- *
var calculator = {
    read: function () {
        var a = (prompt('First number?', "1"));
        if (a !== null) {
            var aNum = +a;
            this.a = aNum;
        }
        else
            this.a = 1;
        var b = (prompt('Second number?', "1"));
        if (b !== null) {
            var bNum = +b;
            this.b = bNum;
        }
        else
            this.b = 1;
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
};
calculator.read();
alert("sum = " + calculator.sum());
alert("mul = " + calculator.mul());
//obj ladder
var ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
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
