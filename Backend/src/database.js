const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('conexión a la base de datos con exito!!!')
});

module.exports = connection;