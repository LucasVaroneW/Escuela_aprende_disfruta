//Define las variables que necesites
var pasados = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(resultado){
  //Guarda el resultado en variables
    hoy=resultado.fechaActual;
    eventos=resultado.eventos;
  //Selecciona los eventos que sean anteriores a la fecha actual del JSON
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha < hoy){
      pasados.push(eventos[i]);
    }
  }
  //Ordena los eventos segun la fecha (los mas recientes primero)
  pasados = pasados.sort(function(x,y){
    if(x.fecha < y.fecha){
      return 1;
    }
    return -1
  });
  //Crea un string que contenga el HTML que describe el detalle del evento
  var pasado = [];
  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < pasados.length; j++){
    pasado[j]= `
          <a class="enlace" href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a>
          <p>${pasados[j].fecha}</p>
          <p>Descripción: ${pasados[j].descripcion}</p>
          `
  }
  //Modifica el DOM agregando el html generado
    for(var i=0;i<pasado.length;i++){
      var a = $("<div id='cajaDinamica' class='colp col-lg-7'></div>");
      a.append(pasado[i]);
      $("#pasados").append(a);  
    }
  })
});
