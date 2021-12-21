const fs = require('fs');

function userLogs(req, res, next) {
  fs.appendFileSync('src/logs/userLogs.txt', 'El usuario ingreso a la ruta: ' + req.url + '\n');	
  next();
}

module.exports = userLogs