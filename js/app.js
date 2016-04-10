/*
4 ps
Problema: No arruinar Breaking bad a los que no lo han visto.
Solucion: Usar hide y mostrar el spolier solo 
a los usuarios que quieran

Planear:
1. Esconder spoiler
2. agregar boton
3. cuando se presiona el boton
	3.1 Mostrar Spoiler
	3.2 Deshacerse del boton
*/

//1. Esconder spoiler
$(".spoiler span").hide();

//2. Agregar boton
$(".spoiler").append("<button>Mostrar Spoiler!</button>");

//3 Cuando se presiona el boton
//Agregar un handler al evento clic
$(".spoiler button").click(function(){
	//3.1 Mostrar Spoiler
	$(".spoiler span").show();

	//3.2 Deshacerse del boton
	$(this).remove();
})

function enviarAdvertencia()
{
	jQuery(".spoiler").hide().show("slow");
}

//Le pasamos al handler la funcion sin parentesis
$(document).ready(enviarAdvertencia);