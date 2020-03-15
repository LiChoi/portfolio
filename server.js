'run strict'
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser  = require('body-parser');



app.use(cors({credentials: true, origin: "https://lmc-portfolio.glitch.me/"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.sendFile('build/index.html',{root:"."}));

//This serves up the react-javascript file built by webpack to the index.html (you will see in index.html there is a <script> tag with src to /transformed)
app.get('/transformed.js', (req, res) => res.sendFile('/build/transformed.js',{root:"."})); 

app.listen(3000, () => {
  console.log("Listening on port " + 3000);
});