const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log("DB_ONLINE")
    } catch (e) {
        console.log(e)
        throw new Error('Error al inicializar la base de datos');
    }
    // mongoose
    //  .connect( process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    //  .then(() => console.log( 'Database Connected' ))
    //  .catch(err => console.log( err ));
}

module.exports = {
    dbConnection
}