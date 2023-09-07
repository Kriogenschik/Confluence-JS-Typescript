"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var es6_promise_1 = require("./node_modules/es6-promise/es6-promise");
//What will the code below output and why?
var promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(function () { return resolve(2); }, 1000);
});
promise.then(alert);
// 1, because working only first 'resolve' in Promise
//create equivalent setTimeout
//delay should return promise which get done state after seted time
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
;
delay(3000).then(function () { return alert('done after 3 sec'); });
