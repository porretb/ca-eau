// Variables //

let arg1 = process.argv[2];
let arg2 = process.argv[3];
let result;

// Function //

function argTest (arg){
	for (i = 0; i < arg.length; i++){
		if (arg < 'A' || arg > 'z')
			result = 'error';
	}
}

function stringInString (str, strIn){
	for (i = 0; i < str.length; i++){
		for (y = 0; y < strIn.length && str[i] === strIn[y]; y++){
			i++;
			if (y === strIn.length - 1)
				return true;
		}
	}
	return false;
}

// Error //
if (process.argv.length > 4)
	return console.log('erreur trop d\'arguments');
else if (process.argv.length < 4)
	return console.log('erreur manque d\'arguments');

argTest(arg1);
argTest(arg2);

// Parsing //

// Resovle //
if (result != 'error')
	result = stringInString(arg1,arg2);

// Display //
console.log(result);
