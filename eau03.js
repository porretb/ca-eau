/*Définition des variables global*/
const arg = process.argv[2];
const erreur = -1;
let result;
/*Fonction*/
function calcFibonnaci (nb)
{
	if (isNaN(nb))
		return (erreur);
	if (nb < 0)
		return (erreur);
	if (nb == 0)
		return 0;
	else if (nb == 1)
		return 1;
	else
	{
		return (calcFibonnaci(nb - 1) + calcFibonnaci(nb - 2));
	}
}


/*Contrôle*/
if (process.argv[3] !== undefined)
	{
		return console.log(erreur);
	}
/*Execution du script*/
result = calcFibonnaci(arg);
/*Affichage*/
console.log(result);
