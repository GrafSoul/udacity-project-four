'use strict';
const opn = require('opn');
const app = require('../server/index');

/**
* @description Setup Server.
*/
const port = 3030;
const server = app.listen(port, listening);

function listening() {
    console.log('*************************************');
    console.log(` Your API id is: ${process.env.API_ID}`);
    console.log(` Your API key is: ${process.env.API_KEY}`);
    console.log(' Server started Successfully!');
    console.log(` Running on - http://localhost:${port}'`);
    console.log('=====================================');
    console.log(' To stop the server, Press - Ctrl+C');
    console.log('*************************************');
}

/**
* @description Opening the app in the browser.
*/
server ? opn(`http://localhost:${port}`) : null ;