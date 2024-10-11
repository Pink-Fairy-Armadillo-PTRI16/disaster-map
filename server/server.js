const express = require('express');
const path = require('path');
const connectMongo = require('./config/mongoConfig');

const app = express();

const PORT = 3000;
const requestAPI = require('./routes/api.js');

// handlidng parse body
app.use(express.json());

// handling static file path
app.use('/', express.static(path.resolve(__dirname, './build')))

app.use('/api',requestAPI);

// unknown route handlers
app.use((req, res) => res.status(404).send('Page Not Found'));

// handling global error handler
app.use ((err, req, res, next) => {
    const defaultErr = {
        log: "Error caught unknown middleware error",
        status: 500,
        message: {err: "An error occurred!" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

connectMongo();

// start server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}...`)
});

module.exports = app;