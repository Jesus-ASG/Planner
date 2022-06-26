/* Calendario */

const div_calendario = document.querySelector("#calendario");
const ol_cal = document.querySelector("#ol_cal");
const titulo_mes = document.querySelector("#mes");
const icon_eye = document.querySelector("#icon_eye");

// Obtener fecha actual
const c_date = new Date();
const c_weekday = c_date.getDay();
const c_day = c_date.getDate();
const c_month = c_date.getMonth();
const c_year = c_date.getFullYear();

// Fecha mostrada
var date = c_date;
var weekday = c_weekday;
var day = c_day;
var month = c_month;
var year = c_year;

var fwd = new Date(year, month, 1).getDay(); //primer día de la semana

var md_ant = new Date(year, month, 0).getDate(); //último día del mes anterior
var md_sig = new Date(year, month+1, 0).getDate(); //último día del mes actual


addMonthYear(month);
rellenarDias();


function rellenarDias(){
	for (var i = day; i >= -fwd+1; i--) {
		const li = document.createElement("li");
		const caja = document.createElement("div");
		const parrafo = document.createElement("p");
		if (i<=0){
			li.appendChild(caja);
			caja.textContent = md_ant+i;
			caja.className = "mes_externo day";
		}
		else{
			li.appendChild(caja);
			caja.textContent = i;
			if (i == day && day == c_day && month == c_month && year == c_year)
				caja.className = "today day";
			else
				caja.className = "day";
		}
		ol_cal.prepend(li);
	}
	for (var i = day+1; i<42-fwd+1; i++){
		const li = document.createElement("li");
		const caja = document.createElement("div");
		if (i<=md_sig){
			li.appendChild(caja);
			caja.textContent = i;
			caja.className = "day";
		}else{
			li.appendChild(caja);
			caja.textContent = i - md_sig;
			caja.className = "mes_externo day";
		}
		ol_cal.appendChild(li);
	}
	div_calendario.appendChild(ol_cal);
}

function actualizar(){
	date = new Date(year, month, 1);
	fwd = date.getDay(); //obtiene primer día de la semana
	md_ant = new Date(year, month, 0).getDate(); //último día del mes anterior
	md_sig = new Date(year, month+1, 0).getDate(); //último día del mes actual
	
	addMonthYear(month);
	rellenarDias();
}

function cargarMesAnterior(){
	ol_cal.innerHTML = "";
	month--;
	if (month<0){
		month = 11;
		year--;
	}
	actualizar();
}

function cargarMesSiguiente(){
	ol_cal.innerHTML = "";
	month++;
	if (month>11){
		month = 0;
		year++;
	}
	actualizar();
}

function addMonthYear(mes){
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
	titulo_mes.innerHTML = titulo_mes.innerHTML + " " + year;
}

// Mostrar/ocultar calendario
var show_calendar = true;
function show_hide_calendar(){
	if (show_calendar){
		div_calendario.style.display = 'none';
		icon_eye.className = "fa-2x fa fa-eye-slash";
		show_calendar = false;
	}
	else{
		div_calendario.style.display = 'block';
		icon_eye.className = "fa-2x fa fa-eye";
		show_calendar = true;
	}
}