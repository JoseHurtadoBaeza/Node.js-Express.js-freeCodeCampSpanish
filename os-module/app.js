const os = require('os');

console.log(os.type());

console.log(os.homedir());

console.log("Tiempo que lleva el sistema encendido en segundos: " + os.uptime());

console.log(os.userInfo());