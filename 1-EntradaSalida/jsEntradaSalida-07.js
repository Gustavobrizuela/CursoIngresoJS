/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Sumar y restar hice de 1 manera ,multiplicar y dividir hice otra manera (ejemplos);
	let numero1;
	
	let numero2;

	let resultado;

	numero1= parseInt (document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt (document.getElementById("txtIdNumeroDos").value);
    resultado = numero1 + numero2;

	alert (" la suma es " + resultado);
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;	

	numero1= document.getElementById("txtIdNumeroUno").value;
	
	numero1=parseInt(numero1);

	numero2= document.getElementById("txtIdNumeroDos").value;

	numero2=parseInt(numero2);

	resultado = numero1 - numero2;

	alert("La resta es " + resultado);	

	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2= parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2;

	alert("La division es " + resultado);
}

