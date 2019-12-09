const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const algorithms = require('./algorithms');
const port = 3000;

/*
app.get('/js/algorithms.js',function(req,res) {
    res.sendFile(path.join(__dirname + '/js/algorithms.js'));
});
*/

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(__dirname));
app.use(bodyParser);


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('server is listening on' + port);
});

app.post('/sortingOrder', function (req, res) {
    // req = {
    //     arrLength: number,
    //     sortType: SortTypes,
    //     arrType: ArrTypes
    // }
    const  mainSortingFunc = algorithms.mainSortingFunc;
    const response = JSON.stringify(mainSortingFunc(req.body));
    res.send(response);
});
