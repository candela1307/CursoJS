function mostrar() {
	let edad;

	edad = document.getElementById("txtEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {

		alert("Mayor de edad");

	} else {
		if (edad < 13) {
			alert("Menor de edad");

		} else {
			alert("Es adolescente");
		}


	}
}
//FIN DE LA FUNCIÓN