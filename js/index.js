// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var pasados = [];
var futuros = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(resultado){

  //Guarda el resultado en variables
  hoy = resultado.fechaActual;
  eventos=resultado.eventos;
  //Clasifica los eventos segun la fecha actual del JSON
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha < hoy){
      pasados.push(eventos[i]);
    }else{
      futuros.push(eventos[i]);
    }
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  futuros = futuros.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });

  //Extrae solo dos eventos
  var futuro = [];

  for(var j = 0; j < 2; j++){
    futuro[j]= `
        <a class="enlace" href="proximos.html">${futuros[j].nombre}</a>
        <p>${futuros[j].fecha}</p>
        <p>Descripción: ${futuros[j].descripcion}</p>
        `
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  futuros = futuros.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });
  //Extrae solo dos eventos
  var pasado = [];

  for(var j = 0; j < 2; j++){
    pasado[j]= `
            <a class="enlace" href="pasados.html">${pasados[j].nombre}</a>
            <p>${pasados[j].fecha}</p>
            <p>Descripción: ${pasados[j].descripcion}</p>
            `
  }
  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado
  for(var i=0;i<2; i++){
    var a = $("<div id='cajaDinamica' class='col col-lg-5'></div>");
    a.append(futuro[i]);
    $("#proximos").append(a);  
  }


  //Crea un string que contenga el HTML que describe el detalle del evento
  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado
  for(var i=0;i<2;i++){
    var a = $("<div id='cajaDinamica' class='col col-lg-5'></div>");
    a.append(pasado[i]);
    $("#pasados").append(a);  
    
  }
})
});
