// Variables //

let arg = process.argv[2];
let newStr = [];
let flag = 0;
let result;
// Functions :

function capitalOneOfTwo(arg){
	for (i = 0; i < arg.length; i++){
		if (arg[i] == ' '){
			newStr += ' ';
			flag = 1;
		}
		else if (flag == 0){
			newStr += arg[i].toUpperCase();
			flag = 1;
		}
		else if (i < arg.length){
			newStr += arg[i].toLowerCase();
			flag = 0;
		}
	}
	return newStr;
}

//Error :

if (arg[0] < 'A' || arg[0] > 'z'){
	return console.log('erreur')
}

// Parsing :

// Resolve :

capitalOneOfTwo(arg);
result = newStr;
// Display :

console.log(result);
