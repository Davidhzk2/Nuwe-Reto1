const mongoose = require("mongoose");

const dbConnection= async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/nuweReto1", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Concection Mongo : ON");
    } catch (error) {
        console.log("Error Connectin to Mongo", error);
        throw new Error("Error connecting to MongoDB");
    }
};

module.exports = {dbConnection};