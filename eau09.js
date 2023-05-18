// Variables:

let nb1 = parseInt(process.argv[2],10);
let nb2 = parseInt(process.argv[3],10);
let result = [];

// Functions :

function minMax(nb1, nb2){
	if (nb1 < nb2){
		for(nb1; nb1 < nb2;nb1++){
			result += nb1 + ' ';
		}
			return result;
	}
	else if (nb1 > nb2){
		for(nb2; nb2 < nb1;nb2++){
			result += nb2 + ' ';
		}
		return result;
	}
}

function nan(nb1, nb2){
	if (isNaN(nb1) || isNaN(nb2))
		result = 'error';
}

// Error :
nan(nb1,nb2);
if (process.argv.length > 4)
	result = 'error';
//Parsing :


//Resovle :
if (result != 'error')
	minMax(nb1,nb2);

//Display :
console.log(result);
