/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  let numero1;
  let numero2;
  let aumento;

  numero1 = document.getElementById("txtSueldo").value;
  numero2 = document.getElementById("txtResultado").value;

  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);

  aumento = numero1 % numero2;

  alert("el aumento es " + aumento);
}
