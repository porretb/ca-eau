// Variables :

let arg = process.argv[2];
let result = 'Yo Man';

// Function :

function numberOnly(arg){
	for(i = 0; i < arg.length; i++){
		if(arg[i] >= 0 || arg[i] <= 9)
			continue;
		else
			return (false);
	}
	return (true);
}

// Error :
if (process.argv.length < 3 || arg == '')
	result = 'error no argument';

// Parsing :

// Resolve :
if (result != 'error no argument')
	result = numberOnly(arg);

// Display :

console.log('Only numbers : ' + result);
