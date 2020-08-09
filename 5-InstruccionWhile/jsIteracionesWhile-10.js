/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. LISTO
2-Suma de los positivos. LISTO
3-Cantidad de positivos. LISTO 
4-Cantidad de negativos. LISTO
5-Cantidad de ceros. LISTO
6-Cantidad de números pares. LISTO
7-Promedio de positivos. LISTO 
8-Promedios de negativos. LISTO
9-Diferencia entre positivos y negativos, (positvos-negativos). LISTO */
function mostrar()
{   //declaro variables
    let numero;
    let i;
    let positivos=0;
    let negativos=0;
    let cantidadPares=0;
    let cantidadNeg=0;
    let cantidadPos=0;
    let cantidadCero=0;
    let promedioPos=0;
    let promedioNeg=0;
    let diferencia;
    //armo la repetitiva
    do{
        numero= parseInt(prompt("Ingrese el número")); //pido al usuario que ingrese el numero
        if (numero > 0){
            positivos=numero + positivos; //acumulo los positivos
            cantidadPos++;
           } //contador positivos
        else if (numero == 0){
            cantidadCero++; //contador de 0
        }
        else {
            negativos=numero+negativos; //acumulo negativos
            cantidadNeg++; //contador negativos
        }
        if(numero % 2 == 0){
            cantidadPares++ //contador pares
        }
        i=prompt(`Si desea ingresar otro numero escriba "si"`); 
    }while (i == 'si'); //si el usuario responde "si" el while vuelve a ejecutarse

    if(cantidadPos != 0){
     promedioPos= positivos / cantidadPos;
    }
    if(cantidadNeg != 0){
     promedioNeg = negativos / cantidadNeg;
    }

    diferencia= cantidadPos - cantidadNeg;
    
    //Mostrar al usuario
    document.write("1) La suma de numeros positivos es: " + positivos + "</br>"); // la etiqueta "br" funciona como el enter en el codigo o un texto para mostrarlo en el html
    document.write("2) La suma de numeros negativos es: " + negativos + "</br>");
    document.write("3) La cantidad de numeros positivos es: " + cantidadPos + "</br>");
    document.write("4) La cantidad de numeros negativos es: " + cantidadNeg + "</br>");
    document.write("5) La cantidad del numero 0 ingresado es: " + cantidadCero + "</br>");
    document.write("6) La cantidad de numeros pares es: " + cantidadPares + "</br>");
    document.write("7) El promedio de los numeros positivos es: " + promedioPos +"</br>");
    document.write("8) El promedio de los numeros negativos es: " + promedioNeg +"</br>");
    document.write("9) La diferencia entre los numeros positivos y los numeros negativos es: "+ diferencia);

}//FIN DE LA FUNCIÓN