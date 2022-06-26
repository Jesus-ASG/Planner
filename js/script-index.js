// Agregar nota
const agregar_nota = document.querySelector("#agregar_nota");
const nueva_nota = document.querySelector("#nueva_nota");

var num_notas = 0;
let arrf = [];	// Arreglo para funciones
let arrn = [];	// Arreglo para divs de notas
agregar_nota.addEventListener("click", function(e){
	const proxima_nota = document.createElement("div");
	const div = document.createElement("div");
	const inp = document.createElement("textarea");

	arrn.push(proxima_nota);
	div.className = "nueva_nota mx-3 mt-2";

	div.appendChild(inp);
	
	var id_nota = "nota"+num_notas;
	num_notas++;
	inp.setAttribute("id", id_nota);

	div.appendChild(inp);
	
	nueva_nota.prepend(div);
	
	inp.focus();

	agregarf(id_nota);
});

function agregarf(id_nota){
	const textarea = document.querySelector("#"+id_nota);
	textarea.addEventListener("keyup", e =>{
        textarea.style.height = "60px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    });
    arrf.push(textarea);
}
// Termina script para notas

