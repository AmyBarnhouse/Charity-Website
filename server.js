const express = require('express');
const app = express();

app.use(express.static(`client`));

// let instruments = [ 'Grand piano', 'Upright Piano', 'Electric Piano','Hybrid Piano'];

app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);