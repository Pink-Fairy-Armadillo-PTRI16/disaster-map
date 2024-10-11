const express = require('express');
const path = require('path');


const app = express();

const PORT = 3000;

// handlidng parse body
app.use(express.json());

// handling static file path
app.use('/', express.static(path.resolve(__dirname, './build')))

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

// start server
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}...`)
});

module.exports = app;