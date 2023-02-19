let arg = process.argv;
function reverseArg (arr)
{
	if (arr.length === 2)
	{
		return ('error');
	}
	else
	{
		let newArray = [];
		arrLength = arr.length
		for (arrLength; arrLength !== 0; arrLength--)
		{
			newArray.push(arr[arrLength]);
		}
		return newArray.slice(1, -1);
	}

}
console.log(reverseArg(arg));
