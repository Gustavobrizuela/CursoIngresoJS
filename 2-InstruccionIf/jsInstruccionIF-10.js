function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * 9 + 1);

	if (nota >=9){
     alert ("EXCELENTE. Nota=" + nota);
	}

	else if (nota >=4) {
		alert ("APROBÓ. Nota=" + nota);
	}
	else {
		alert ("Vamos,la proxima se puede. Nota=" + nota);
	}



	



}//FIN DE LA FUNCIÓN