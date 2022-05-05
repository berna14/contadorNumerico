let contadorNumerico = document.querySelector(".count");
let botonSuma = document.querySelector(".btn-plus");
let botonReinicio = document.querySelector(".btn-reset");
let botonResta = document.querySelector(".btn-minus");

console.log(contadorNumerico);

let cuentaNumeros = 0;

botonSuma.addEventListener("click", () => {
  contadorNumerico.textContent = ++cuentaNumeros;
  cambiaColor();
});

botonResta.addEventListener("click", () => {
  contadorNumerico.textContent = --cuentaNumeros;
  cambiaColor();
});

botonReinicio.addEventListener("click", () => {
  contadorNumerico.textContent = cuentaNumeros = 0;
});

function cambiaColor() {
  if (cuentaNumeros >= 20 && cuentaNumeros <= 30) {
    contadorNumerico.style.color = "#FFB997";
  } else if (cuentaNumeros >= 10 && cuentaNumeros <= 20) {
    contadorNumerico.style.color = "#95C623";
  } else {
    contadorNumerico.style.color = "#000000";
  }
}
