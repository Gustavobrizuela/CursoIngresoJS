/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	// obtengo el nombre y edad de las cajas de texto de su id y los guardo en sus variables correspondientes;
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	//tambien se puede hacer asi: alert (Ústed se llama ${nombre} y tiene ${edad} años) , (falta poner backtick) ;
}

