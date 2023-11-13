const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("*** Conexión correcta");
    } catch (err) {
        console.log('*** Error de conexión', err);
    }
}


module.exports = dbConnect