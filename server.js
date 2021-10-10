let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let rs = fs.createReadStream('./demo.txt');
let events = require('events');
let eventEmitter = new events.EventEmitter();

// Create an event handler
// let myEventHandler = function() {
//     console.log('I hear scream');
// }

// Assign the event handler to an event
// eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
// eventEmitter.emit('scream');

// rs.on('open', function() {
//     console.log('The file is open');
// })

// let adr = 'http://localhost:8000/default.html?year=2020&month=november';
// let q = url.parse(adr, true);

// console.log(q.host); // returns localhost:8000
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata);
// console.log(qdata.month);
// console.log(qdata.year);

// http.createServer(function (req, res) {
//     res.writeHead(404, { 'Content-Type': 'text/html'});
//     res.write('The date and time are currently: ' + dt.myDateTime());
//     res.end('Hello World!');
// }).listen(8000);

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8000);

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8000);

// http.createServer(function (req, res) {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     })
// }).listen(8000);

// http.createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "." + q.pathname; // ./somepath
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             return res.end('404 Not Found');
//         }
//         res.writeHead(200, { 'Contetn-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     })
// }).listen(8000);

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(uc.upperCase('teeratat pisarnsint'));
//     res.end();
// }).listen(8000);

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(uc.upperCase('teeratat pisarnsint'));
//     res.end();
// }).listen(8000);

// fs.appendFile('mynewfile3.txt', 'This is update text', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('mynewfile3.txt', 'This is replace new file 3', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.unlink('mynewfile3.txt', function(err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// fs.rename('mynewfile2.txt', 'myrenamefile.txt', function(err) {
//     if (err) throw err;
//     console.log('File renamed!');
// });

