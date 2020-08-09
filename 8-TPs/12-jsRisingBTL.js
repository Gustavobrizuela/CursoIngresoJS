/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 //definicion de variables
	 let edad;
	 let sexo;
	 let estadoCivil;
	 let sueldoBruto;
	 let legajo;
	 let nacionalidad;
	 
	 edad=parseInt(prompt("Ingrese su edad: "));
	 while(edad <18 || edad > 90 || isNaN(edad)){
		edad=parseInt(prompt("Edad invalida ingrese su edad nuevamente(18minimo - 90 maximo): "));
	}
	 sexo=prompt('Ingrese su sexo : "m" si es masculino o "f" si es femenino').toLowerCase();
	 while(sexo != "m" && sexo != "f"){
		sexo=prompt('Sexo invalido. Ingrese nuevamente : "m" si es masculino o "f" si es femenino').toLowerCase();
	 }
	 estadoCivil=parseInt(prompt('Ingrese su estado civil: "1" si es soltero/a , "2" si es casado/a , "3" si es separado/a o "4" si es viudo/a'));
	 while(estadoCivil <1 || estadoCivil > 4 || isNaN(estadoCivil)){
		estadoCivil=parseInt(prompt('Estado civil invalido. Ingrese nuevamente : "1" si es soltero/a , "2" si es casado/a , "3" si es separado/a o "4" si es viudo/a'));
	 }
	 sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto: $ "));
	 while(sueldoBruto < 8000 || isNaN(sueldoBruto)){
		sueldoBruto=parseInt(prompt("El sueldo minimo es de $8000. ingrese su sueldo bruto nuevamente: $ "));
	 }
	 legajo=parseInt(prompt("Ingrese su numero de legajo: "));
	 while(legajo < 1000 || legajo > 9999 || isNaN(legajo)){
		legajo=parseInt(prompt("legajo invalido.Ingrese su numero de legajo nuevamente: "));
	 }
	 nacionalidad=prompt('Ingrese su nacionalidad: "A" si es argentino, "E" para extranjeros o "N" si es nacionalizado ').toUpperCase();
	 while(!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N")){
		nacionalidad=prompt('Nacionalidad invalida.Ingrese su nacionalidad nuevamente: "A" si es argentino, "E" para extranjeros o "N" si es nacionalizado ').toUpperCase();
	 }

	 document.getElementById("txtIdEdad").value=edad;
	 document.getElementById("txtIdSexo").value=sexo;
	 document.getElementById("txtIdEstadoCivil").value=estadoCivil;
	 document.getElementById("txtIdSueldo").value=sueldoBruto;
	 document.getElementById("txtIdLegajo").value=legajo;
	 document.getElementById("txtIdNacionalidad").value=nacionalidad;

}


