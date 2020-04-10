var socket = io();

// on Escuchar 
socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado del servidor");
});

// Emit Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Gerardo Forero',
    message: "Hola Mundo"
}, function(resp) {
    // console.log("se disparó el callback");
    console.log('Respuesta Server:', resp);
});

// on Escuchar información
socket.on('enviarMensaje', function(resp) {
    console.log("Servidor", resp);

});