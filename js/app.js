var estudiantes = [];

function obtenerListaEstudiantes() {

 return estudiantes;
    // TO DO: Retornar la lista de estudiantes

}
function Estudiante (nombreEstudiante,porcentajeTecnico,porcentajeHse){
                      this.nombreEstudiante=nombreEstudiante;
                      this.porcentajeTecnico=porcentajeTecnico;
                      this.porcentajeHse=porcentajeHse;
                      }

function agregarEstudiante() {

  var nombreEstudiante= prompt("Nombre del Estudiate");
  var porcentajeTecnico= prompt("Porcentaje tecnico");
  var porcentajeHse= prompt("Porcentaje habilidades socio-emocionales");

  var alumno= new Estudiante(nombreEstudiante,porcentajeTecnico,porcentajeHse)
  estudiantes.push(alumno);
  return alumno;
    }

    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado



function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante+ "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico+ "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHse+ "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {

  var lista="";

              estudiantes.forEach(function(alumno){
              lista += mostrar(alumno);
    });
    return lista;
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {

 var buscarEstudiante = estudiantes.filter(function(alumno){
   return alumno.nombreEstudiante.toLowerCase()==nombre.toLowerCase();
 });

    return buscarEstudiante;
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
  var ordenarTopTecnico= estudiantes.sort(function(posicionA,posicionB){
  return posicionB.porcentajeTecnico>posicionA.porcentajeTecnico;
});
return ordenarTopTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
      var ordenartopHSE= estudiantes.sort(function(posicionA,posicionB){
      return posicionB.porcentajeHse>posicionA.porcentajeHse;
    });
    return ordenartopHSE;
}
