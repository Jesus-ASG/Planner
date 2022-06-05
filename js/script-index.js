// Agregar nota
const agregar_nota = document.querySelector("#agregar_nota");
const nueva_nota = document.querySelector("#nueva_nota");


var num_notas = 0;
let arr = [];
agregar_nota.addEventListener("click", function(e){
	const div = document.createElement("div");
	div.className = "nueva_nota mx-3 mt-2";

	const inp = document.createElement("textarea");

	var id_nota = "nota"+num_notas;
	num_notas++;
	inp.setAttribute("id", id_nota);

	div.appendChild(inp);
	nueva_nota.appendChild(div);
	//nueva_nota.append(div);
	inp.focus();

	agregar(id_nota);
});

function agregar(id_nota){
	const textarea = document.querySelector("#"+id_nota);

	textarea.addEventListener("keyup", e =>{
        textarea.style.height = "60px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    });
    arr.push(textarea);
}