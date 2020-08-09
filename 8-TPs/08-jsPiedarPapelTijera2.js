
let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
eleccionMaquina = Math.round (Math.random()* 2+1);
alert ("JUGUEMOOOOS");
document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
mostrarResultado();


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == 1){
		alert ("yo elegi piedra...EMPATAMOS..");
		ContadorDeEmpates++;
		document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
	}
	else if (eleccionMaquina == 2){
		alert ("yo elegi papel...PERDISTE!!!");
		ContadorDePerdidas++;
		document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	}
	else {
		alert ("yo elegi tijera...GANASTE!!!")
		ContadorDeGanadas++;
		document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	}
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 1){
		alert ("yo elegi piedra...GANASTE!!!");
		ContadorDeGanadas++;
		document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	}
	else if (eleccionMaquina == 2){
		alert ("yo elegi papel...EMPATAMOS..");
		ContadorDeEmpates++;
		document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
	}
	else {
		alert ("yo elegi tijera...PERDISTE!!!")
		ContadorDePerdidas++;
		document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 1){
		alert ("yo elegi piedra...PERDISTE!!!");
		ContadorDePerdidas++;
		document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	}
	else if (eleccionMaquina == 2){
		alert ("yo elegi papel...GANASTE!!!");
		ContadorDeGanadas++;
		document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	}
	else {
		alert ("yo elegi tijera...EMPATAMOS..")
		ContadorDeEmpates++;
		document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	eleccionMaquina = Math.round (Math.random()* 2+1);
	document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	document.getElementById("txtIdEmpates").value=ContadorDeEmpates;
	document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
}
				  
  
 
   