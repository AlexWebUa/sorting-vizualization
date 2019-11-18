const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/js/algorithms.js',function(req,res) {
    res.sendFile(path.join(__dirname + '/js/algorithms.js'));
});
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('server is listening on' + port);
});
