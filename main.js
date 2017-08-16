// let fs = require('fs');
// let hello = require('./deuxieme');

// hello();

// fs.readFile('/home/dev/monserveur', 'utf-8',
//     function(error, data) {
//         console.log(data);

//     });
// console.log('bloup');
let final;
let data = require('./data');
let demande = data.demande(function(callback) {
    final = JSON.stringify(callback);
})



var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(final);
    res.end();
}).listen(8081);