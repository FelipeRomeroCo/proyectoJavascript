import Curso from "./classes/Curso.js"
import Profesor from "./classes/Profesor.js"
import Alumno from "./classes/Alumno.js"

//Instanciando objetos de la clase Curso
// const html = new Curso("HTML desde cero", "https://i.ytimg.com/vi/kN1XP-Bef7w/maxresdefault.jpg", 10)
// const javascipt = new Curso("JavaScript desde cero", "https://i.ytimg.com/vi/z95mZVUcJ-E/maxresdefault.jpg", 12)

const elemento = document.getElementById("etiquetas")

//Imprime un curso en el DOOM
//Recibe un objeto de tipo Curso

function mostrarCursos(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add("col-4")
    hijo.classList.add("mb-4")
    hijo.innerHTML = `   
    <div class="card" style="width: 18rem;" >
            <img src="${curso.getPoster()}" class="card-img-top" alt="${curso.getNombre()}">
            <div class="card-body">
                <h5 class="card-title">${curso.getNombre()}</h5>
                <p class="card-text"># de clases: ${curso.getClases()}</p>
            </div>
    </div>


`
    elemento.appendChild(hijo)

}

//Llamadas a la función mostrarCursos
// mostrarCursos(html)
// mostrarCursos(css)
// mostrarCursos(javascipt)

let nombresCursos =[]

const formulario = document.getElementById("formularioCursos")
formulario.addEventListener("submit", e =>{
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCursos(curso)
    nombresCursos.push(curso.getNombre())

    // const listaCursos = 
    // for(let nombres of nombresCursos){
    //     console.log(nombres)
    // }

}
)

// const profe = new Profesor ("Felipe", "Romero", "Correo@gmail.com",true,["HTML", "CSS","JavaScript"], 5)
// console.log(profe)

// const alumno1 = new Alumno ("Homer", "Simpson", "Correofalso", true, ["HTML", "CSS"])
// const alumno2 = new Alumno ("Bart", "Simpson", "Correofalso2", true, ["HTML", "JavaScript"])

// html.setInscritos([...html.getInscritos(),alumno1])
// html.setInscritos([...html.getInscritos(),alumno2])

// console.log(html)

const formularioAlumno = document.getElementById("formularioAlumno")
formularioAlumno.addEventListener("submit", e =>{
    e.preventDefault()
    const target = e.target
    const alumno = new Alumno(target.nombresAlumno.value, target.apellidosAlumno.value, target.correoAlumno.value, target.activoAlumno.value, target.cursosTomadosAlumno.value)
    console.log(alumno)
}
)
const formularioProfesor = document.getElementById("formularioProfesor")
formularioProfesor.addEventListener("submit", e =>{
    e.preventDefault()
    const target = e.target
    const profesor = new Profesor(target.nombresProfesor.value, target.apellidosProfesor.value, target.correoProfesor.value, target.activoProfesor.value, target.cursosDictadosProfesor.value, target.calificacionProfesor.value)
    console.log(profesor)
}
)

