/*FONCTIONS*/
const nbArr = [];

function combination ()
{
	let nb1 = 0;
	let nb2 = 1;
	let nb3 = 2;
	let arr;
	//while (nb1 < 8)
	for (nb1 = 0; nb1 < 8 ; nb1++)
	{
		//while (nb2 < 9)
		for (nb2 = nb1 + 1; nb2 < 9; nb2++)
		{
			//while (nb3 < 10)
			for (nb3 = nb2 + 1; nb3 < 10; nb3++)
			{	
				if (nb1 !== nb2 && nb1 !== nb3 && nb2 !== nb3)
				{
					arr = `${nb1}${nb2}${nb3}`;
					nbArr.push(arr);
					//console.log(nb1,nb2,nb3);
					//nb3++;
				}
			}
			//nb2++;
		}
		//nb1++;
	}

}


/*GESTION ERREUR*/
/*PARSING*/
/*RESOLUTION*/

/*AFFICHAGE*/
combination();
console.log(nbArr.join(', '));
