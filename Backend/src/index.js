require('dotenv').config();

const app = require('./app');
require('./database');


async function main() {
    await app.listen(9000);
    console.log('Corriendo por el puerto 9000')
}

main();