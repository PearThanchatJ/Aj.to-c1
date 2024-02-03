const express = require('express');
const app = express();
// Define a route 
app.get('/', (req, res) => {
    res.send('Hello Pear ka');
});
//start server
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});