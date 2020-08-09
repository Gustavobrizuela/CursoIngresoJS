/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	 let numero;
	 let i;
	 let maximo;
	 let minimo;
	 let flag=0;

	 do {
		 numero=parseInt(prompt("Ingrese un numero"));
		 switch(flag){
			 case 0:
			    maximo=numero;
			    minimo=numero;
			    flag=1;
			    break;
			 default:
				 if(maximo < numero){
					 maximo=numero;
				 }
				 else if(minimo > numero){
					 minimo=numero;
				 }				
				    }
       i=prompt ('Si desea ingresar otro numero escriba "si"');
	 }while (i == "si");

	 document.getElementById("txtIdMaximo").value=maximo;
	 document.getElementById("txtIdMinimo").value=minimo;
}//FIN DE LA FUNCIÓN