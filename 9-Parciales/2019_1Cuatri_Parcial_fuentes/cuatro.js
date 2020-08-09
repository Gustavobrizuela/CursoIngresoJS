function mostrar()
{
  let numero1;
  let numero2;
  let resta;

  numero1=parseInt(prompt("Ingrese el 1er numero"));
  numero2=parseInt(prompt("Ingrese el 2do numero"));

  if(numero1 == numero2){
      alert(`${numero1} ${numero2}`);
  }
  else if(numero1 > numero2){
     resta=numero1 - numero2
     if(resta > 10){
         alert("La resta es: "+resta+" y supero el 10");
     }
     else{
         alert("la resta es: "+resta);
     }
  }
}
