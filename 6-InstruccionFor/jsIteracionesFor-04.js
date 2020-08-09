function mostrar()
{
	let numero;

	numero=parseInt(prompt("Ingrese un numero"));
	
	for(let i=0;i != numero;i++){
		console.log(i);
		if(i>numero){
			break;
		}
	}
	console.log(numero);

}//FIN DE LA FUNCIÓN