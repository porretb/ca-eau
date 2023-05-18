let arg = process.argv[2];
let result;
let next;

/*FUNCTION*/

function fiboSuite (nb) {
	if (nb == 0)
		return 0;
	else if (nb == 1)
		return 1;
	else
		return fiboSuite(nb - 1) + fiboSuite(nb - 2);
}

function nextFibo (nb) {
	let next;
	for (i = 0; nb >= fiboSuite(i); i++)
	{
		next = i;
	}
	return next;
}
/*CONTROL*/

if (arg < 0 || isNaN(arg))
	return console.log(-1);

/*AFFECT*/

next = nextFibo(arg);
result = fiboSuite(next + 1);

/*AFFICHE*/

console.log('prochain nombre premier :' + result);
