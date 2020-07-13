/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{ 
	let Nombre;
	Nombre=prompt("Ingrese su nombre");
	document.getElementById("txtIdNombre").value=Nombre;
}

