// Ventana popup de registro
const abrir = document.querySelector("#registrarse");
const form = document.querySelector("#popup-registro");
const cerrar = document.querySelector("#close");

abrir.addEventListener("click", function(e){
	e.preventDefault(); //Evita que aparezca almoadilla en la barra de navegación
	form.showModal();
});

cerrar.addEventListener("click", function(e){
	e.preventDefault(); //Evita que aparezca almoadilla en la barra de navegación
	form.close();
});
// fin de la ventana popup registro
