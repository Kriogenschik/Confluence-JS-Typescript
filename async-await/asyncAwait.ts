import {Promise} from './node_modules/es6-promise/es6-promise'
// import {Promise} from 'es6-promise'
//implement async/await instead of .then/catch
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

async function loadJson(url: string): Promise<string> {
	let response = await fetch(url);

	if (response.status == 200) {
		let json: string = await response.json();
		return json;
	} else {
		throw new Error('response.status');
	}
}

loadJson('no-such-user.json')
  .catch(alert);


//in demoGithubUser add loop with async/await instead of recursion

class HttpError extends Error {
	response: any;
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson2(url: string): Promise<string> {
	let response = await fetch(url);
	if (response.status == 200) {
		let json = await response.json();
		return json;
	} else {
		throw new HttpError(response);
	}
}

// ask login until github returns a exists user
async function demoGithubUser(): Promise<void> {
	let user;
	while(true) {
		
		let name: string|null = prompt("enter login?", "iliakan");

		try {
			user = await loadJson2(`https://api.github.com/users/${name}`);
			break;
		} catch (err) {
			if (err instanceof HttpError && err.response.status == 404) {
        alert("This user not exists, try again please");
      } else {
        throw err;
      }
		}
	}
	alert( `Name: ${user.name}` )
}

demoGithubUser();