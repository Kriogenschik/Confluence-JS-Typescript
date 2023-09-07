import {Promise} from 'es6-promise'
//what will be the output

setTimeout(function timeout(): void {
	console.log('Таймаут');
}, 0);

let p = new Promise<void>(function(resolve, reject): void {
	console.log('Создание промиса');
	resolve();
});

p.then(function(): void {
	console.log('Обработка промиса');
})

console.log('Конец скрипта');

// 'Создание промиса' 'Конец скрипта' 'Обработка промиса' 'Таймаут'

//what will be the output

console.log(1);

setTimeout((): void => console.log(2));

Promise.resolve().then((): void => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

Promise.resolve().then((): void => console.log(5));

setTimeout((): void => console.log(6));

console.log(7);

// 1 7 3 5 2 6 4