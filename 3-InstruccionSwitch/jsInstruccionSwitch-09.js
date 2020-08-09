function mostrar()
{
	let estacion;
	let localidad;
	let estadia;
	
	estacion = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;
	estadia = 15000;

	switch (estacion){
		case "Invierno":
			switch (localidad){
				case "Bariloche":
					alert (`La estadia cuesta $ ${estadia + estadia * 0.2}`);
					break;
				case "Mar del plata":
					alert (`la estadia cuesta $ ${estadia - estadia * 0.2}`);
					break;
				case "Cataratas":
				case "Cordoba":
					alert (`la estadia cuesta $ ${estadia - estadia * 0.1}`);
					break;
					} break;    
		case "Verano":
			switch (localidad){
				case "Bariloche":
					alert (`La estadia cuesta $ ${estadia - estadia * 0.2}`);
					break;
				case "Mar del plata":
					alert (`la estadia cuesta $ ${estadia + estadia * 0.2}`);
					break;
				case "Cataratas":
				case "Cordoba":
					alert (`la estadia cuesta $ ${estadia + estadia * 0.1}`);
					break;} 
					break; 		   
		case "Otoño":
		case "Primavera":
			switch (localidad){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					alert (`la estadia cuesta $ ${estadia + estadia * 0.1}`);
					break;
				case "Cordoba":
					alert (`la estadia cuesta $ ${estadia}`);
					break;
			}
				break;	} //Fin switch  
		
}//FIN DE LA FUNCIÓN