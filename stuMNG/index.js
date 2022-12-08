const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const studentRoutes = require("./routes/student");
const app = express();
dotenv.config();

//Connect DB
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log('connected');
})

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));

//Route 
app.use("/v1/student", studentRoutes)

app.listen(8000, () => {
    console.log("running");
})

