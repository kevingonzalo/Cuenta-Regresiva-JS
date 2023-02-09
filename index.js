// subtitulo
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const fecha = document.querySelector(".fecha");
let date = new Date("January 18 2023 12:00:00 GMT-0300");

const year = date.getFullYear();
const hours = date.getHours();
const mins = ("0" + date.getMinutes()).slice(-2);
let mes = date.getMonth();
mes = meses[mes];
const dato = date.getDate();
const day = diasSemana[date.getDay() - 1];
console.log(date.getDay());
fecha.textContent = `el sorteo finaliza el ${day}, ${dato} de ${mes} de ${year} a las ${hours}:${mins} am`;

// reloj cuenta regresiva

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const final = document.querySelector(".final-msj");

const cuentaAtras = new Date("January 18 2023 12:00:00 GMT-0300").getTime();
const intervalo = setInterval(() => {
    const ahora = new Date().getTime();

    let distancia = cuentaAtras - ahora;

    let days = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let hours = ("0" + Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(
        -2
    );
    let minutes = ("0" + Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    let seconds = ("0" + Math.floor((distancia % (1000 * 60)) / 1000)).slice(-2);

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerText = seconds;
}, 1000);
