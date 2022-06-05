// Agregar nota
const agregar_nota = document.querySelector("#agregar_nota");
const nueva_nota = document.querySelector("#nueva_nota");



agregar_nota.addEventListener("click", function(e){
	console.log("click");
	const di = document.createElement("input");
	di.type = "text";
	di.className = "nueva_nota";
	di.textContent = "Hola soy un nuevo div";
	nueva_nota.appendChild(di);
});