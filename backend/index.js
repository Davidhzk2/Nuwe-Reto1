const express = require('express');
const {dbConnection} = require("./db/connectdb");
require("dotenv").config();

const User = require("./routes/user");


const app = express();

app.use(express.json());

app.use("/reto/user/", User);

// Listen Port
app.listen(process.env.PORT, ()=>
    console.log("Server running in port: "+ process.env.PORT)
);

dbConnection();