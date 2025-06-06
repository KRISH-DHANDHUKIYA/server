// create a server :
const express = require("express");
const cors = require("cors");//
const userRoutes = require("../routes/use_routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes)

app.get('/home', (req, res) => {
    res.send("success");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000!");
});




//json.stingify:
console.log(JSON.stringify({ x: 5, y: 6 }))

console.log(JSON.stringify([new Number(8), new String("false"), new Boolean(false)]));

console.log(JSON.stringify({ x: [10, undefined, function () { }, Symbol("")] }))