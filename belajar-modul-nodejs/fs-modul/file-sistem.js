// import modul
var http = require('http');
var fs = require('fs');

// menjalankan modul
http.createServer(function (request, response) {
    // baca file
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        
        // kirim response
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    });
}).listen(8000);

console.log("server running on http://localhost:8000");
