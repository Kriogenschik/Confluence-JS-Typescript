import {Promise} from './node_modules/es6-promise/es6-promise'
//What will the code below output and why?

const promise = new Promise<number>(function(resolve: (arg0: number) => void, reject: any) {
	resolve(1);

	setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// 1, because working only first 'resolve' in Promise

//create equivalent setTimeout
//delay should return promise which get done state after seted time

function delay(ms: number): Promise<void> {
	return new Promise ((resolve: TimerHandler) => setTimeout(resolve, ms))
};

delay(3000).then(() => alert('done after 3 sec'));