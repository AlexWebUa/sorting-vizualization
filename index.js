const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
// const  __dirname = "F:\\Liza\\univer\\sorting-vizualization";
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
})
app.use(express.static(__dirname));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('server is listening on' + port);
})