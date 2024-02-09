const express = require('express');
const app = express();
// Define a route 
app.get('/', (req, res) => {
    res.send('Hello Pear ka');
});

app.get('/test', (req, res) => {
    const id = req.query.id;

    const output = `id: ${id}`;
    res.send(output);
});

//start server
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
