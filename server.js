// import library http dari modul node_modul
var http = require('http');
// membuat server
var server = http.createServer(function(req, res){
    res.end("Hi, Selamat datang di nodejs");
});

// konfigurasi port server
server.listen(8000);

// menampilkan text tanda sedang menjalankan server
console.log("server running on http://localhost:8000");