function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Mar del plata":
			alert ("Este");
			break;
		case "Cataratas":
			alert ("Norte");
			break;
		case "Bariloche":
			alert ("Oeste");
			break;
		default:
			alert ("Sur");
	}

	

}//FIN DE LA FUNCIÓN