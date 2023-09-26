const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


const estudiantes = [
    { nombre: "Lucas", notas: [6, 9, 8] },
    { nombre: "Ale", notas: [10, 10, 10] },
    { nombre: "Mati", notas: [6, 6, 7] },
];

function calcularPromedio(estudiantes) {
    let sumaTotal = 0;
    let totalNotas = 0;

    for (let i = 0; i < estudiantes.length; i++) {
    const notasEstudiante = estudiantes[i].notas;

    let sumaEstudiante = 0;
    for (let j = 0; j < notasEstudiante.length; j++) {
        sumaEstudiante += notasEstudiante[j];
    }

    const promedioEstudiante = sumaEstudiante / notasEstudiante.length;
    sumaTotal += promedioEstudiante;
    totalNotas += 1;
    }
    const promedioTotal = sumaTotal / totalNotas;
    return promedioTotal;
    }
const promedioNotas = calcularPromedio(estudiantes);
console.log(`El promedio de notas de todos los estudiantes es: ${promedioNotas}`);
