const fs = require('fs');
const path = require('path');


function fillInforme(pathReadFile) {
    const data = fs.readFileSync(pathReadFile, "utf-8");

    const parsedData = data.split('\r\n');

    parsedData.forEach((line) => {
        const [name, email, time, guest] = line.split(',');
        const message = `${name} ha venido a clase durante ${time} minutos\n`;
        fs.appendFileSync(path.join("ejercicio-2", "files", "informe.txt"), message);
    });

}

const files = fs.readdirSync(path.join("ejercicio-2", "files"))

for (file of files) {
    const filePath = path.join("ejercicio-2", "files", file);
    fillInforme(filePath);
}