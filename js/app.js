function enviarAdvertencia()
{
	jQuery(".advertencia").hide().show("slow");
}

//Le pasamos al handler la funcion sin parentesis
$(document).ready(enviarAdvertencia);