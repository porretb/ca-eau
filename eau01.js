let nb1;
let nb2;
let arr;
let display = ' ';
let zero = '0';
const nbArr = [];

	for (nb1 = 0; nb1 < 100; nb1++)
	{
		for (nb2 = nb1 + 1; nb2 < 100; nb2++)
		{
			if (nb1 < 10 && nb2 < 10)
			{
				arr = `${zero}${nb1}${display}${zero}${nb2}`;
			}
			else if (nb1 < 10 && nb2 > 9)
			{
				arr = `${zero}${nb1}${display}${nb2}`;
			}
			else
			{
			arr = `${nb1}${display}${nb2}`;
			}
			nbArr.push(arr);
		}
	}
console.log(nbArr.join(', '));
