function mostrar()
{
  let precio;
  let descuento;
  let precioFinal;

  precio=parseFloat(prompt("Ingrese el precio"));
  descuento=parseFloat(prompt("Ingrese el descuento a realizar"));

  precioFinal= precio - (precio * descuento / 100 );

  document.getElementById("elPrecioFinal").value=precioFinal;

}
