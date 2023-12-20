const express = require('express');
const cors = require("cors");
const corsConfig = require("./config/cors");
const utils = require("./utils");

const app = express();
app.use(cors(corsConfig));

app.set("json replacer", utils.jsonReplacer);


const router = new express.Router();
require("./routes")(router);
app.use(router);

module.exports = app;