/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo= prompt('ingrese sexo "f" o "m".').toLowerCase();

	while(!(sexo =="m" || sexo=="f")){
		sexo= prompt ('Sexo ingresado es invalido.Ingrese nuevamente "f" o "m"').toLowerCase();
	}

	document.getElementById("txtIdSexo").value=sexo;

}//FIN DE LA FUNCIÓN