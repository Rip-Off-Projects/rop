// * Rozmiar Kółka
var circle_size = document.getElementById("circle_size");
var circle_size_output = document.getElementById("size");


setInterval(function () {
  circle_size_output.innerHTML = circle_size.value + "px";
  localStorage.setItem("circle_sizeLocalStorage", circle_size.value);
}, 0);

// * Czas na kliknięcie
var time = document.getElementById("time");
var time_output = document.getElementById("timeout");

setInterval(() => {
  time_calculation = time.value / 1000;
  time_output.innerHTML = time_calculation.toFixed(1) + "s";
  localStorage.setItem("timeLocalStorage", time.value);
}, 0);

// * dopuszzczalne missy
var chances = document.getElementById("msc");
var chances_output = document.getElementById("msco");

setInterval(function () {
  chances_output.innerHTML = chances.value;
  localStorage.setItem("mscLocalStorage", chances.value);
}, 0);

//* check box check
document.getElementById("checkbox").checked = false;
setInterval(() => {
  var rndEvent = checkbox.checked;
  localStorage.setItem("rndEventLocalStorage", rndEvent)
  //! document.getElementById("wh").innerHTML = typeof rndEvent;
}, 0);
// * chowanie loga
setTimeout(function () {
  document.getElementById('bg').style.opacity = 0;
  document.getElementById('bg').style.visibility = "hidden";
  document.getElementById('menu').style.opacity = 1.0;
}, 1000);

function startGame() {
  document.location.href = "game.html";
};
/* ! debug
setInterval (() => {
  document.getElementById('wh').innerHTML = `Debug<br>Width: ${window.innerWidth}<br>Height: ${window.innerHeight}`;
}, 0); */