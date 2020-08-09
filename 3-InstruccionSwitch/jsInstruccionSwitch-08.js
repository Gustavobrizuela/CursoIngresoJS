function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if (destino == "Cataratas" || destino == "Mar del plata"){
		alert ("Hace calor");
	}
	else {
		alert ("Hace frio");
	}

}//FIN DE LA FUNCIÓN