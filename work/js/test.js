console.log("wecome to your teacher game !");

for (var i = 1; i <= 100; i++) {	

	if ( i % 5 === 0 && i % 3 === 0 && i % 2 === 0) {
		console.log("FizzBuzz !")
		}
	else if ( i % 5 === 0 && i % 3 === 0) {
			console.log("FizzBuzz")
	}

	else if ( i % 3 === 0 && i % 2 === 0) {
			console.log("Fizz !")
	}
	else if ( i % 7 === 0 && i % 2 === 0) {
			console.log("Oups !")
	}	
	else if ( i % 5 === 0 && i % 2 === 0) {
			console.log("Buzz !")
	}
	else if ( i % 3 === 0) {
			console.log("Fizz")
	}	
	else if (i % 5 === 0) {
			console.log("Buzz")
		}
	else if (i % 7 === 0) {
			console.log("Oups")
		}
	else if (i % 2 ===0) {
		console.log(i +"!")
	}	
	else {
		console.log(i)
		}
}
	

console.log("end of the game");