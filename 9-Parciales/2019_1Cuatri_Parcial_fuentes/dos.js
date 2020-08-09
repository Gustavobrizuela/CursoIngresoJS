function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let totalPeso;
  let promedio;

  nombre1=prompt("Ingrese su nombre");
  peso1=parseInt(prompt("Ingrese su peso"));
  nombre2=prompt("Ingrese su nombre");
  peso2=parseInt(prompt("Ingrese su peso"));

  totalPeso= peso1 + peso2;

  promedio=totalPeso / 2;

  alert(`Ustedes se llaman: ${nombre1} y ${nombre2} ,pesan ${peso1}kls y ${peso2}kls, que sumados son ${totalPeso}kls y el promedio de peso es: ${promedio}kls`);
  
}
