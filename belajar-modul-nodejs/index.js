// impor modul moment
var moment = require('moment');
var salam = require('./salam');

// mengunakan modul moment nodejs
console.log(salam.salamPagi());
console.log("sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
