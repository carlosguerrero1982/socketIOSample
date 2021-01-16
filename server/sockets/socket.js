const { io } = require('../server');
const { ticketControl } = require('../../server/classses/ticket-control');


let ticketcontrol = new ticketControl();

io.on('connection', (client) => {

    client.on('newticket', (data, callback) => {

        let siguiente = ticketcontrol.siguiente();


        console.log(data);

        callback(siguiente);
    });

});