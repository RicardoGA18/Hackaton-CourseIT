const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect('mongodb+srv://el_rupo:passw0rd@cluster0.rwuqg.mongodb.net/test', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
        });
        console.log("DB online");
    } catch (error) {
        console.log(error);
        throw new Error("Error al iniciar la base de datos");
    }
}

module.exports = {
    dbConnection,
}