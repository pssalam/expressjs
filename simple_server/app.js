const express = require('express');
const port = '3001';
const host = '127.0.0.1';
const app = express();

app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
        <html>
            <header>
                <title>ExpressJS Simple Server </title>
            </header>
            <body>
                <h1>Simple Server with ExpressJS</h1>
            </body>
        </html>
    `);
    res.end();
});

app.listen(port, host, ()=>{
    console.log('Server successfully started!!');
});