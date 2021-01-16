const fs = require('fs');


class ticketControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');

        if (data.hoy === this.hoy) {

            this.ultimo = data.ultimo;

        } else {

            this.reiniciarConteo();
        }



    }

    siguiente() {

        this.ultimo += 1;
        this.grabar();

        return `Ticket ${this.ultimo}`;
    }

    grabar() {

        let jsondata = {
            ultimo: this.ultimo,
            hoy: this.hoy
        };

        let jsondataString = JSON.stringify(jsondata);
        fs.writeFileSync('./server/data/data.json', jsondataString);
        //  console.log("se ha iniciado el sistema");

    }

    reiniciarConteo() {

        this.ultimo = 0;
        console.log("se inicializa el sistema");
        this.grabar();


    }

}



module.exports = {
    ticketControl
};