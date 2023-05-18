// Variables:

let arg = process.argv.slice(2);
let newArray;

// Functions :

function selectSort(arr){
	for (i = 0; i < arr.length; i++){
		for(j = i + 1; j < arr.length; j++){
		min = arr[i];
			if (min > arr[j]){
				arr[i] = arr[j];
				arr[j] = min;
			}
		}
	}
	return newArray = arr;
}
function toNumber(arr){
	for (i = 0; i < arr.length; i++){
		arr[i] = parseInt(arr[i]);
	}
}

function eRor(arr){
	for (i = 0; i < arr.length; i++){
		if (isNaN(arr[i]))
			return newArray = 'error nAn';
	}
}
function isEmpty(arr){
	if (arr == '')
		return newArray = 'no argument';
}

// Error :

toNumber(arg)
eRor(arg);
isEmpty(arg);

// Parsing :

// Resolve :
if (newArray != 'error nAn' && newArray != 'no argument')
	selectSort(arg);

// Display :

console.log(newArray);
