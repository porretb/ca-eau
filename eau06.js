let arg1 = process.argv[2];

function oneOfTwoCapital(arg){
	let newStr;
	for (i = 0; i < arg.length; i++){
		if (i % 2 === 0 && arg[i] >= 'a' && arg[i] <= 'z'){
			console.log('yes')
			arg[i] = arg[i].toUpperCase;
		}
		newStr += arg[i]
		console.log(arg[i]);
	}
 return newStr;
}

console.log(oneOfTwoCapital(arg1));
