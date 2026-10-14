import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Spread de objeto y de arreglo
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

// Mostrar en la consola
console.log(`Curso: ${curso}`);
todos.forEach((estudiante) => console.log(reporte(estudiante)));

// Mostrar resultados en la página web (DOM)
const tituloHTML = document.querySelector("#titulo");
const listaHTML = document.querySelector("#reportes");

if (tituloHTML) {
  tituloHTML.textContent = `Curso: ${curso}`;
}

if (listaHTML) {
  todos.forEach((estudiante) => {
    const li = document.createElement("li");
    li.textContent = reporte(estudiante);
    listaHTML.appendChild(li);
  });
}