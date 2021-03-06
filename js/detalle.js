// Hemos omitido los acentos en los comentarios por compatibilidad
var placa = [];
var eventos;

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  url = document.URL;
  url = String(url.match(/\?+.+/));
  url = url.replace("?", "");
  p = url.split("=");

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  //Guarda el resultado en una variable
  eventos=resultado.eventos;
  console.log(resultado.eventos)
  //Busca el elemento en el arreglo
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].id == p[1]){
      placa.push(eventos[i]);
    }
  }
  //Crea un string que contenga el HTML que describe el detalle del evento
  var elemen = [];
  //Modifica el DOM agregando el html generado dentro del div con id=evento
  elemen = `<div class="detalle" id="cajaDinamica">
              <h2>${placa[0].nombre}</h2>
              <p>Fecha: ${placa[0].fecha}</p>
              <p>Descripción: ${placa[0].descripcion}</p>
              <p>Lugar: ${placa[0].lugar}</>
              <p>Invitados: ${placa[0].invitados}</p>
              <p>Precio: ${placa[0].precio}</p>
            </div>
            `

    var b = $("<div id='ele1' class='cole col-lg-7'></div>");
    b.append(elemen);
    $("#evento").append(b);
  })
});
