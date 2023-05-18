/*FONCTIONS*/
let nbArr = [];

function combination ()
{
	let nb1 = 0;
	let nb2 = 1;
	let nb3 = 2;
	let arr = [];
	let result;
	for (nb1 = 0; nb1 < 8 ; nb1++)
	{
		for (nb2 = nb1 + 1; nb2 < 9; nb2++)
		{
			for (nb3 = nb2 + 1; nb3 < 10; nb3++)
			{
				if (nb1 !== nb2 && nb1 !== nb3 && nb2 !== nb3)
				{
					result = `${nb1}${nb2}${nb3}`;
					arr.push(result);
				}
			}
		}
	}
	return (arr);
}

/*GESTION ERREUR*/
/*PARSING*/

/*RESOLUTION*/

nbArr = combination();

/*AFFICHAGE*/
console.log(nbArr.join(', '));
