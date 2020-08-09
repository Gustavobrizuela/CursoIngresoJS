/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeros;
	let i;
	let suma=0;
	let producto=1;
	let flag=0;

	do{
		numeros=parseInt(prompt("Ingrese el número"));
        if(numeros >= 0){
			suma= numeros + suma;
		}
		else{
			producto= numeros * producto;
			flag=1;
		}
		i = prompt (`Si desea ingresar otro numero escriba "si"`);

	}while(i == "si");

	if(flag == 0){
		producto=0;
	}

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdProducto").value=producto;

}//FIN DE LA FUNCIÓN