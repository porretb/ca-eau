// Variables :

let arrNbr = process.argv.slice(2);
let result;

// Function :

function minAbs(array){
	let nb1;
	let nb2;
	let nb3;

	for (i = 0; i < array.length; i++){
		for (z = i + 1; z < array.length; z++){
			nb1 = array[i];
			nb2 = array[z];
			nb3 = nb1 - nb2;
			if (nb3 < 0){
				nb3 = nb3 * -1;
			}
			if (result == undefined)
				result = nb3 + 1;
			if (nb3 < result)
				result = nb3;
			if (isNaN(nb1) || isNaN(nb2))
				return result = 'error nan';
		}
	}

return (result);
}

// Error :

if (arrNbr == '' || isNaN(arrNbr[0]) || arrNbr.length == 1)
	result = 'error';
// Parsing :

// Resolve :
if (result != 'error')
	minAbs(arrNbr);
// Display :

console.log(result);
