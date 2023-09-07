"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var es6_promise_1 = require("es6-promise");

//what will be the output
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
var p = new Promise(function (resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function () {
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
// 'Создание промиса' 'Конец скрипта' 'Обработка промиса' 'Таймаут'
//what will be the output
console.log(1);
setTimeout(function () { return console.log(2); });
Promise.resolve().then(function () { return console.log(3); });
Promise.resolve().then(function () { return setTimeout(function () { return console.log(4); }, 0); });
Promise.resolve().then(function () { return console.log(5); });
setTimeout(function () { return console.log(6); });
console.log(7);
// 1 7 3 5 2 6 4
