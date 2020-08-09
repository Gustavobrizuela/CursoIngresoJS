/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let escribir;
	let numero;
	let suma=0;
	let promedio;
	let contador=0;

	do{ //utilizamos do en vez de while cuando queremos que el codigo pase por la funcion aunque sea 1 vez
		numero = parseInt(prompt('Ingrese un numero'));
		suma= suma + numero;
		contador++;//cuenta la cantidad de veces que se repite la funcion
		escribir= prompt('Si quiere ingresar otro numero escriba "si"');
	}while (escribir == 'si'); //la funcion do tiene que terminar con while y la condicion (recordar poner ;)

	promedio= suma / contador; // al resultado de los numeros ingresados por el usuario los divide por la cantidad de numeros que que ingreso

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN