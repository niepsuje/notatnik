const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api')

// routers
app.use('/', apiRouter);

// server
app.listen(port, () => {
    console.log('server słucha... http://localhost' + port);
});