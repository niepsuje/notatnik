const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// db
require('./db/mongoose'); 

// parsery
// Content-type: application/json
app.use(bodyParser.json());

// routers
app.use('/api', apiRouter);

// server
app.listen(port, () => {
    console.log('server słucha... http://localhost' + port);
}); 