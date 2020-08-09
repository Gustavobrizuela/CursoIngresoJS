function mostrar()
{
	let numero;
	let flag=0;

	numero=parseInt(prompt("Ingrese un número: "));

	for(let i=2; i < numero;i++){
		if(numero % i ==0){
			flag=1;
		}
	}
	if (flag== 1 || numero==1){
		console.log(numero + " El numero no es primo");
	}
	else{
		console.log(numero + " El numero es primo");
	}

}//FIN DE LA FUNCIÓN