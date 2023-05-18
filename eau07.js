// Variables :

let arg = process.argv[2];
let flag = 0;
let result = 'rap';

// Function :

function uppercase(arg){
	result = '';
	for (i = 0; i < arg.length; i++){
		if(flag == 0){
			result += arg[i].toUpperCase();
			flag = 1;
		}
		else if (flag == 1 && arg[i] == ' '){
			result += arg[i];
			flag = 0;
		}
		else if (flag == 1){
			result += arg[i].toLowerCase();
		}
	}
	return result;
}

// Error :
if (arg < 'A' || arg > 'z' || arg == undefined){
	result = 'error';
}

// Parsing :

// Resolve :
if (result != 'error')
	uppercase(arg);


// Display :

console.log(result);
