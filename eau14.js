// Variables :

let arg = process.argv.slice(2);
let newArr;

// Functions :

function asciiSort(arr){
	console.log(arr);
	for (i = 0; i < arr.length; i++){
		for(j = i + 1; j < arr.length; j++){
			ascii = arr[i].charCodeAt(0);
			ascii2 = arr[j].charCodeAt(0);
			if(ascii > ascii2){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return newArr = arr;
}

function isEmpty(arr){
	if (arr == '')
		return newArr = 'argument is empty';
}

// Error :

isEmpty(arg);

// Parsing :

// Resolve :

if (newArr != 'argument is empty')
	asciiSort(arg);

// Display :

console.log(newArr);
