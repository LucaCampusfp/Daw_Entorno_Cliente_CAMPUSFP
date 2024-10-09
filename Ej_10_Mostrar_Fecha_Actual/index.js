var fecha = "";
var p_fecha = document.getElementById("fecha");


var fecha_actual =  new Date();
//HE PUESTO EL MENOS 1 PORQUE ME SACA UN DIA ADELANTADO

var dia = fecha_actual.getDate();
var mes = fecha_actual.getMonth() + 1;
var año = fecha_actual.getFullYear();

var diaSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


// alternativa para sacar el dia de la semana
// let nombreDia = fecha_actual.toLocaleDateString('es-ES', { weekday: 'long' });

var nombreDia = diaSemana[fecha_actual.getDay()-1];


var nombreMes = meses[fecha_actual.getMonth()];

alert("Hoy es " + nombreDia + ", " + dia + " de " + nombreMes + " del " +  año );

fecha +=  "Hoy es " + nombreDia + ", " + dia + " de " + nombreMes + " del " +  año ;

p_fecha.innerHTML = fecha;

console.log(fecha_actual);



