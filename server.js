const { sendFormPage } = require('./routes');
const { parseBody } = require('./parse-body');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;
server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  // your code for assembling the request body string...
  req.on('end', () => {
    // your code for parsing the request body string into an object...

    sendFormPage(req, res); // needs to be called even if the request doesn't have a body
  });
});

server.listen(port, hostname, () => {
  console.log(`Successfully started the server on port 5000`);
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
