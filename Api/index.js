const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api')

// db
require('./db/mongoose'); 

// routers
app.use('/', apiRouter);

// server
app.listen(port, () => {
    console.log('server słucha... http://localhost' + port);
}); 