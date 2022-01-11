const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');




const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

require('dotenv').config({path: __dirname + '/.env'});

console.log(process.env.DB_PWD);
const CONN_URL = `mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PWD}@cluster0.elyih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3000


mongoose.connect(CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {app.listen(PORT); console.log("server working");}).catch((e) => console.log(e.message));



