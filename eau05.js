let arg1 = process.argv[2];
let arg2 = process.argv[3];


function argTest (arg){
	if (arg < 'A' || arg > 'z')
		return 'erreur';
}

function stringInString (str, strIn){
	for (i = 0; i < str.length; i++){
		if (argTest(str[i]) === 'erreur')
			return 'erreur';

		for (y = 0; y < strIn.length && str[i] === strIn[y]; y++){
			i++;
			if (argTest(strIn[y]) === 'erreur')
				return 'erreur';
			if (y === strIn.length - 1)
				return true;
		}
	}
	return false;
}

if (process.argv.length > 4)
	return console.log('erreur');


execute = stringInString(arg1,arg2);

console.log(execute);

