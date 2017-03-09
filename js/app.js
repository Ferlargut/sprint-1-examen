var estudiantes = [];

function obtenerListaEstudiantes() {

 
    // TO DO: Retornar la lista de estudiantes

}

function agregarEstudiante() {

  function nuevoEstudiante(){
  this.nombre=prompt("Nombre del estudiante");
  this.procentaje=prompt("Porcentaje tecnico");
  this.hse=prompt("Porcentaje habilidades socio-emocionales");
}

  var alum=new nuevoEstudiante();
  estudiantes.push(alum);
  return alum;
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
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre+ "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.procentaje+ "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse+ "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
  var lista="";

  for(i=0;i<estudientes.length;i++){
    lista=estudiantes[i];
  }
  return lista;
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
