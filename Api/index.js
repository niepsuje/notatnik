const express = require('express');
const app = express();
const { port } = require('./config');

// routers
const apiRouter = require('./routes/api')

app.use('/', apiRouter);

app.listen(port, () => {
    console.log('server słucha... http://localhost' + port);
});