// Hemos omitido los acentos en los comentarios por compatibilidad


  //Expresion regular del correo
  $('.formulario__btn').click(function(e){
		e.preventDefault();
		console.log('Holamundo')
	
		$('input, select').each(function(){
			$('#errorNombre').text('')
			$('#errorCorreo').text('')
			$('#errorPassword').text('')
			$('#errorConfirmacion').text('')
			$('#errorTipo').text('')
			$('#errorTerminos').text('')
			
			// --------------------------Nombre--------------------------
				nombre = $('#nombre').val();

				if(nombre == ''){
					$('#errorNombre').text('Debe poner su nombre completo')
				}

			// --------------------------Correo electrónico--------------------------
				var VAL = $('#correo').val();
				var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

				if(!email.test(VAL)){
					$('#errorCorreo').text('El correo electrónico debe tener formato de correo conteniendo un @ y un dominio.')
				}
			// --------------------------Contraseña--------------------------
				var pass = $('#password').val();
		
				if(pass.length < 8){
					$('#errorPassword').text('La contraseña debe tener más de 8 caracteres.')
				};
				if(pass == ''){
					$('#errorPassword').text('Se deben completar todos los campos.')
				};
			// --------------------------Confirmación--------------------------
				var confirmacion = $('#confirmacion').val()

				if(confirmacion !== pass){
					$('#errorConfirmacion').text('La contraseña y confirmación deben coincidir.')
				};
				if(confirmacion == ''){
					$('#errorConfirmacion').text('Se deben completar todos los campos.')
				};
		
			// --------------------------Género--------------------------
				if($('#tipo').val() == '-1'){
					$('#errorTipo').text('Se debe especificar un género musical específico.')
				}
			// --------------------------Términos--------------------------
				if(! $('#terminos').prop('checked')){
					$('#errorTerminos').text('Debe aceptar los terminos de uso.')
				}
		});
  })