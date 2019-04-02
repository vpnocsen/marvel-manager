# Question 1:
	String.prototype.removedVowels = function(){ return this.replace(/[ueoaiUEOAI]/g, '');}
	// Test:
	"This website is for losers LOL!".removedVowels();
# Question 2:

	The current code is using callback and it is easy to fall to "Callback Hell". 
	To optimize this code, we can use Async/await
	
	module.exports = {
		getAccountId: async (apiKey, cb) => {
			try{
				const connection = await sql.connect(connectionString);
				result1 = await connection.query(query1);
				console.log(result1);
				result2 = await connection.query(query2, {...result1});
				console.log(result2);
				result3 = await connection.query(query3, {...result2});
				console.log(result3);
			catch(ex){
				console.error(ex);
			}
		}
	}
# MarvelManager

Demo: https://marvel-manager-40bc5.firebaseapp.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
