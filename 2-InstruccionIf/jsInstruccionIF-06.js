function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert ("Es mayor de edad");
}
    else if (edad <= 12){
		alert ("Es niño");
	}
	else {
		alert ("Es adolescente");
	}
		
	
}
//FIN DE LA FUNCIÓN