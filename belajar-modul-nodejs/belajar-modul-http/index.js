//impor modul
var http = require('http');
var url = require('url');

//memanggil modul
// var server = http.createServer(function(request, response){ 
//     response.end("Hi, selamat datang di nodejs");
// });

// server.listen(8000);

// modifikasi response body dan header
//  type html
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-type': 'text/html'});
//     response.write("Hello <b>World!</b>");
//     response.end();
// }).listen(8000);

// // type json
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-type': 'application/json'});
//     response.write("{'message': 'hello world!'}");
//     response.end();
// }).listen(8000);

// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-type': 'text/html'});
//     // response.write('URL: ' + request.url);
//     switch(request.url) {
//         case '/about':
//             response.write("ini adalah ahalam about");
//             break;
//         case '/profile':
//             response.write("ini adalah ahalam profile");
//             break;
//         case '/produk':
//             response.write("ini adalah ahalam produk");
//             break;
//         default:
//             response.write("404: Halaman tidak ditemukan");
//             break;
//     }
//     response.end();
// }).listen(8000);

// mengambil query string dari URL
http.createServer(function (request, response){
    response.writeHead(200, { 'Content-Type' : 'text/html'});
    // parsing url
    var q = url.parse(request.url, true).query;
    // mengambil value variable keyword
    var txt = 'Kata kunci: ' + q.keyword;
    response.end(txt);
}).listen(8000);


console.log("server runnng on http://localhost:8000");