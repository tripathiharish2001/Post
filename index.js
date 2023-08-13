const express = require("express");
const app = express();

const cors = require("cors");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");

// maps js object to mongodb table
const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

dotEnv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

// a promisifying function
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected....!");
  })
  .catch((err) => {
    console.log(err);
  });

// Now we are going to create a new folder for database structure known as ## models ## always and it we have a file for schema structure

// also we have to make a  new folder for api , it is not a good practice to write api over here,
//  we have ## routes## forlder for apis

// abb server ko kaise pta hlega ki mai api waha likh raha?
// ude -> to accept
//  /api -> kuch bhi de skte

app.use("/api", require("./routes/Crud"));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

/*
#####################3 NOtes 
1. Mongodb gives id on its own, or primary key
*/
