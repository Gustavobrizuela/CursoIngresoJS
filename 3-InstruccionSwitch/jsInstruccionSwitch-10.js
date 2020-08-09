function mostrar()
{
	let estacion;
	let localidad;
	
	estacion = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	switch (estacion){
		case "Invierno":
			//Probando el funcionamiento con IF
			if (localidad == "Bariloche"){
				alert ("Se viaja");
			}
			else{
				alert ("No se viaja");
			}
			break;
		case "Verano":
			switch (localidad){
				case "Cataratas":
				case "Mar del plata":
					alert (`Se viaja`);
					break;
				case "Bariloche":
				case "Cordoba":
					alert (`No se viaja`);
					break;
				}
				 break;  
		case "Primavera":
			switch (localidad){
				case "Bariloche":
					alert (`No se viaja`);
					break;
				case "Mar del plata":	
				case "Cataratas":
				case "Cordoba":
					alert (`Se viaja`);
					break;   }
				break;	
		case "Otoño":
			switch (localidad){
				case "Bariloche":
				case "Mar del plata":
				case "Cordoba":
				case "Cataratas":
					alert (`Se viaja`);
					break;
									
							}
									}				

}//FIN DE LA FUNCIÓN