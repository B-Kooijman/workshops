import express from 'express';
import fs from 'fs';
import path from 'path';
import App from '../src/App';

import React from 'react';
import ReactDOM from 'react-dom/server';

const PORT = 8000;
const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err) {
            console.log(err); 
            return res.status(500).send('Something went wrong!');
        }

        var SSRApp = ReactDOM.renderToString(<App />);
        var newData = data.replace('<div id="root"></div>', `<div id="root">${SSRApp}</div>`);

        return res.send(newData);
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})