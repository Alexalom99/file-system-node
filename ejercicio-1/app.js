const fs = require('fs');
const path = require('path');
let dni = process.argv[2];

/** Leer README */


const data = require('./hacienda.json');

// data.forEach( (person) => {
//     console.log(person.nombre);
// });



function personInFile(dni, data) {
    for (let person of data) {
        if (person.dni === dni) {
            return person;
        }
    }
    return;
}

const person = personInFile(dni,data);
if (person) {
    const message = (`El/la contibuyente ${person.nombre} tiene notificaciones pendientes. Se enviará un mail a ${person.email}\n`);
    fs.appendFileSync("./ejercicio-1/notificaciones.txt", message, "utf-8");
}
else {
    const error = `El dni ${dni} no tiene pagos pendientes\n`;
    fs.appendFileSync("./ejercicio-1/notificaciones.txt", error, "utf-8");
}


