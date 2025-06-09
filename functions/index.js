// create a server :
const express = require("express");
const cors = require("cors");
const serverless = require('serverless-http')
const userRoutes = require("../routes/use_routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/index", userRoutes)

app.get('/', (req, res) => {
    res.send("success");
});


module.exports.handler= serverless(app)




//json.stingify:
// console.log(JSON.stringify({ x: 5, y: 6 }))

// console.log(JSON.stringify([new Number(8), new String("false"), new Boolean(false)]));

// console.log(JSON.stringify({ x: [10, undefined, function () { }, Symbol("")] }))