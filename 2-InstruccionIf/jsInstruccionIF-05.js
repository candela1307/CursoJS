function mostrar()
{
	let edad;

	edad = document.getElementById("txtEdad").value;
    edad = parseInt(edad);

	if (edad < 13 || edad > 17) { 
	  alert("No es adolescente");
} 
}
//FIN DE LA FUNCIÓN