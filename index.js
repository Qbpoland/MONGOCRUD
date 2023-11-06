const express = require('express');
const app = express();
const db = require('./db');


app.get('/', async (req, res) => {
res.send('Hello World!');

});

app.get('/listAll', async (req, res) => {
res.write("<h1> List All </h1>");
const client = await db.connect();
res.end();
});




app.listen(8000, () => {
console.log('Example app listening on port 8000!');
});