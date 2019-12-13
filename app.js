const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const enums = require("./enums");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(favicon(__dirname + '/assets/images/favicon.ico'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/sortingOrder', cors() ,(req, res) => {
    let requestBody = req.body;
    res.json(JSON.stringify(requestBody));
});

app.listen(port, (err) => {
   if(err) {
       return console.log("Error occured ", err);
   }
   console.log(`${port} port is listening`)
});
