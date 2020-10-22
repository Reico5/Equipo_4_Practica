var  boton  =  documento . getElementById ( "operacion" ) ;

boton . addEventListener ( "clic" , sumar )

función  sumar ( ) 
{
	var  caja_resultado  =  documento . getElementById ( "resultado" ) ;
	var  varloUno  =  parseFloat ( documento . getElementById ( "valorUno" ) . valor ) ;
	var  varloDos  =  parseFloat ( documento . getElementById ( "valorDos" ) . valor ) ;
	var  resul  =  varloUno  -  varloDos ;

	caja_resultado . valor  =  resultado ;
}