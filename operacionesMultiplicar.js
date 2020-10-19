var boton = document.getElementById("operacion");

boton.addEventListener("click",multiplicacion)

function multiplicacion() 
{
	var caja_resultado = document.getElementById("resultado");
	var varloUno = parseFloat(document.getElementById("valorUno").value);
	var varloDos = parseFloat(document.getElementById("valorDos").value);
	var resul = varloUno * varloDos;

	caja_resultado.value = resul;
}