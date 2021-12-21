const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


function validate (req, res, next) {
    const user = req.query.name;
    console.log(user);
    const valid = users.find(u => u === user);
    
        valid ? next() : res.send('no tienes los provilegios para entrar');
    
}

module.exports = validate;