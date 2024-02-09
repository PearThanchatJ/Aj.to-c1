const express = require('express');
const app = express();
// Define a route 
app.get('/', (req, res) => {
    res.send('Hello Pear ka');
});

app.get('/test', (req, res) => {
    const id = req.query.id;
    const name = req.query.name || 'No name';
    const output = `id: ${id} and name: ${name}`;
    res.send(output);
});

//start server 3000
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
