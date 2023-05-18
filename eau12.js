// Variables :

let arg = process.argv.slice(2);
let newArr = [];

// Functions :

function stringToInt(arr){
	for(i = 0; i < arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
}

function bubbleSort(arr){
	for(i = 0; i < arr.length; i++){
		for(j = 0; j < arr.length - 1; j++){
			if (arr[j] > arr[j + 1]){
				let temp;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
return (newArr = arr);
}
function numberOrString(arr){
	for(i = 0; i < arr.length; i++){
		if (isNaN(arr[i]))
			return newArr = 'error Not a Number';
	}
}

// Error :

stringToInt(arg);
numberOrString(arg);
if (arg == '')
	newArr = 'error';
// Parsing :

// Resolve :
if (newArr != 'error Not a Number' && newArr != 'error')
	bubbleSort(arg);


// Display :

console.log(newArr);
