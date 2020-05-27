

// ENV;
require("dotenv").config();
// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

let jwtAuth = require("./util/jwtAuth");

const app = express();
app.use(cors());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-timebase"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


const port = process.env.PORT || 4500;

const { getModels, loginModel, signupModel } = require("./routes/models");

// Static File Service
app.use(express.static("public"));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the native promise of Node.js
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://xianxi95:songsih1995@ds131814.mlab.com:31814/heroku_83drsvgm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch(e => console.error(e));

// Signup Model
app.post("/signup", signupModel);
// Login Model
app.post("/login", loginModel);

// Get all models data
app.get("/models", jwtAuth.checkToken, getModels);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
