/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numero1;
    let numero2;
    let numero3;
	let resultado;

	numero1= parseFloat (document.getElementById("txtIdPrecioUno").value);
    numero2= parseFloat (document.getElementById("txtIdPrecioDos").value);
    numero3= parseFloat (document.getElementById("txtIdPrecioTres").value);
    resultado = numero1 + numero2 + numero3;

	alert (" la suma de los precios es $ " + resultado.toFixed(2));
}
function Promedio () 
{
	let numero1;
    let numero2;
    let numero3;
	let resultado;

	numero1= parseFloat (document.getElementById("txtIdPrecioUno").value);
    numero2= parseFloat (document.getElementById("txtIdPrecioDos").value);
    numero3= parseFloat (document.getElementById("txtIdPrecioTres").value);
    resultado = (numero1 + numero2 + numero3)/ 3;

	alert ("El promedio es $ " + resultado.toFixed(2));
}
function PrecioFinal () 
{
	let numero1;
    let numero2;
    let numero3;
    let aumento;
    let nuevoSueldo;

	numero1= parseFloat (document.getElementById("txtIdPrecioUno").value);
    numero2= parseFloat (document.getElementById("txtIdPrecioDos").value);
    numero3= parseFloat (document.getElementById("txtIdPrecioTres").value);
    aumento = (numero1 + numero2 + numero3) * 21 / 100;
    nuevoSueldo = numero1+numero2+numero3+aumento;

    alert ("El precio final es $ " + nuevoSueldo.toFixed(2));


}