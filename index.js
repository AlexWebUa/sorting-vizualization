const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.listen(port, '127.0.0.1');

app.use(express.static(__dirname));

app.use(bodyParser);
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/js/algorithms.js',function(req,res) {
    res.sendFile(path.join(__dirname + '/js/algorithms.js'));
});

app.post('/sortingOrder', function (req, res) {
    req = {
        arrLength: number,
        sortType: SortTypes,
        arrType: ArrTypes
    };
    const  mainSortingFunc = algorithms.mainSortingFunc;
    const response = JSON.stringify(mainSortingFunc(req.body));
    res.send(response);
});
