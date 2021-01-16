var socket = io();


var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log("conectado al server");
});

socket.on('disconnect', function() {

    console.log("desconectado al server");
});

$('button').on('click', function() {


    const auth = {
        user: 'lito',
        apellido: 'guerrero rodriguez',
        profesion: 'devops',
        edad: 38,
        localidad: 'sevilla'
    };

    socket.emit('newticket', auth, function(siguienteTicket) {


        label.text(siguienteTicket);

    });

});