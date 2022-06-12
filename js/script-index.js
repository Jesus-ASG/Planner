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



/* Calendario */

const div_calendario = document.querySelector("#calendario");
const ol_cal = document.querySelector("#ol_cal");
const titulo_mes = document.querySelector("#mes");

// Obtener fecha actual
const current_date = new Date();
var weekday = current_date.getDay();
var day = current_date.getDate();
var month = current_date.getMonth();
var year = current_date.getFullYear();
// Obtener primer día de la semana
var first_weekday = new Date(year, month, 1).getDay();

// Obtener último día del mes actual
var max_days = new Date(year, month+1, 0).getDate();

// Obtener último día del mes anterior
var last_max_day = new Date(year, month, 0);
var last_max_days = last_max_day.getDate();

ponerMes(month);
for (var i = day; i >= -first_weekday+1; i--) {
	const li = document.createElement("li");
	if (i<=0){
		li.textContent = last_max_days+i;
		li.className = "mes_externo";
	}
	else{
		li.textContent = i;
		if (i==day)
			li.className = "today";
	}
	
	ol_cal.prepend(li);
}

for (var i = day+1; i<42-first_weekday+1; i++){
	const li = document.createElement("li");
	if (i<=max_days){
		li.textContent = i;
	}else{
		li.textContent = i - max_days;
		li.className = "mes_externo";
	}
	ol_cal.appendChild(li);
}
div_calendario.appendChild(ol_cal);

function ponerMes(mes){
	switch(mes){
		case 0:titulo_mes.innerHTML = "Enero";
		break;
		case 1:titulo_mes.innerHTML = "Febrero";
		break;
		case 2:titulo_mes.innerHTML = "Marzo";
		break;
		case 3:titulo_mes.innerHTML = "Abril";
		break;
		case 4:titulo_mes.innerHTML = "Mayo";
		break;
		case 5: titulo_mes.innerHTML = "Junio";
		break;
		case 6:titulo_mes.innerHTML = "Julio";
		break;
		case 7:titulo_mes.innerHTML = "Agosto";
		break;
		case 8:titulo_mes.innerHTML = "Septiembre";
		break;
		case 9:titulo_mes.innerHTML = "Octubre";
		break;
		case 10:titulo_mes.innerHTML = "Noviembre";
		break;
		case 11:titulo_mes.innerHTML = "Diciembre";
		break;
	}
}