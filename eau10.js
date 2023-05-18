// Variables :

let arg = process.argv.slice(2);
let result = [];

// Function :

function indexWanted(str){
	let lastWord = str[str.length - 1];
	for(i = 0; i < str.length -1; i++){
		if (str[i] == lastWord)
			return i;
	}
	return -1;
}

// Error :
if (arg == '')
	result = 'error';
// Parsing :

// Resovle :
if (result != 'error')
	result = indexWanted(arg);
// Display :
console.log(result);
