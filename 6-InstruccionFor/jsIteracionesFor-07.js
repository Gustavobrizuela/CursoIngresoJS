function mostrar()
{
	let numero;
	let contadorDiv=0;

	numero=parseInt(prompt("Ingrese un numero"));

	for(let i=1;i <= numero;i++){
		if(numero % i == 0 ){
			console.log(i);
			contadorDiv++;
		}
	}
	console.log("La cantidad de divisores ingresados es: "+ contadorDiv);



}//FIN DE LA FUNCIÓN