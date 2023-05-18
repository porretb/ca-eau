// Variables //

let arg = process.argv.slice(2);
let result = [];
let newArray = [];

// Function //

function argReverse(arr){
	for (i = arr.length -1; i >= 0; i--){
		newArray.push(arr[i]);
	}
	return newArray;
}
// Error //

if (arg.length < 1){
	return console.log('erreur pas d\'argument');
}
// Parsing //

// Resolve //
argReverse(arg);
result = newArray.join('\n');

// Display //

console.log(result);
