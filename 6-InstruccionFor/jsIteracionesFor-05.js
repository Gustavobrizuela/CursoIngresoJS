function mostrar()
{
	let numero;

	for(;;){
		numero=parseInt(prompt("Ingrese un numero(9) para salir"));
		if(numero == 9){
			break;
		}
		alert ("Usted ingreso el numero: " + numero);
	}


}//FIN DE LA FUNCIÓN