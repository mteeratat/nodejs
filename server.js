let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');

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

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8000);

// fs.appendFile('mynewfile.txt', 'Hello, World', function(err) {
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