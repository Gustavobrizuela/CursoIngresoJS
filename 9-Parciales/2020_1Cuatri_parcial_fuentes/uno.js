
function mostrar()
{
	//declaracion de variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let cantAlcohol;
	let alcoholBarato;
	let fabricanteAlcohol;
	let cantidadMayorU;
	let tipoMayorCant;
	let acumMayorU=0;
	let acumAlcohol=0;
	let acumBarbijo=0;
	let acumJabon=0;
	let contadorA=0;
	let contadorB=0;
	let contadorJ=0;
	let promedio;
	let flagAlcohol=0;

	alert("SI DESEA VER LOS PRODUCTOS INGRESADOS,PRESIONE F12 Y LA CONSOLA SE LO MOSTRARA AL FINALIZAR DE CARGAR LOS DATOS");

	for(i=0;i<5;i++){
		tipo=prompt('Ingrese el tipo de producto: "alcohol" , "barbijo" o "jabon"').toLowerCase();
		while(!(tipo == "alcohol" || tipo == "barbijo" || tipo == "jabon")){
			tipo=prompt('Invalido.Ingrese el tipo de producto nuevamente: "alcohol" , "barbijo" o "jabon"').toLowerCase();
		}
		precio=parseFloat(prompt('Ingrese el precio (minimo $100- maximo $300) : ')).toFixed(2);
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio=parseFloat(prompt('Invalido.Ingrese el precio nuevamente (minimo $100- maximo $300) : ')).toFixed(2);
		}
		cantidad=parseInt(prompt('Ingrese la cantidad (maximo 1000): '));
		while(cantidad < 0 || cantidad > 1000){
			cantidad=parseInt(prompt('Invalido.Ingrese la cantidad nuevamente (maximo 1000): '));
		}
		marca=prompt("Ingrese la marca");
		fabricante=prompt("Ingrese el fabricante");

		switch(tipo){
			case "alcohol":
				acumAlcohol+=cantidad;
				contadorA++;
				if(!flagAlcohol){
					alcoholBarato=precio;
					cantAlcohol=cantidad;
					fabricanteAlcohol=fabricante;
					flagAlcohol++;
				}
				else{  
					if(precio < alcoholBarato){
					alcoholBarato=precio;
					cantAlcohol=cantidad;
					fabricanteAlcohol=fabricante;
					}
				}
			    break;
			case "barbijo":
				acumBarbijo+=cantidad;
				contadorB++;
				break;
			case "jabon":
				acumJabon+=cantidad;
				contadorJ++;
				break;
		}

		console.log("Producto: "+tipo +"\n Precio: $" + precio +"\n Cantidad: " + cantidad 
		+"\n Marca: " + marca +"\n Fabricante: " + fabricante +"\n");  
	}

	if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon){
		acumMayorU=acumAlcohol;
		cantidadMayorU=contadorA;
		tipoMayorCant="Alcohol";
	}
	else if(acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon){
		acumMayorU=acumBarbijo;
		cantidadMayorU=contadorB;
		tipoMayorCant="Barbijo";
	}
	else{
		acumMayorU=acumJabon;
		cantidadMayorU=contadorJ;
		tipoMayorCant="Jabon";
	}

	promedio= acumMayorU / cantidadMayorU;


	if(flagAlcohol == 0){
		alert ("A-No se compro alcohol");
	}
	else{
		alert("A-Alcohol barato:\n" +"fabricante: "+ fabricanteAlcohol + "\ncantidad: "
		+ cantAlcohol + "\nprecio: "+ alcoholBarato);
	}

	alert("B-Tipo con mayor unidades: " + tipoMayorCant +" promedio de compra: "+ promedio );

	alert("C-Cantidad de jabones: " + acumJabon);
   

}
