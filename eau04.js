let arg = process.argv[2];

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
	for (i = 0; nb >= fiboSuite(i); i++)
	{
		next = i;
	}
	return next;
}

/*AFFECT*/

let result;

result = nextFibo(arg);

/*AFFICHE*/

console.log(fiboSuite(result + 1));
