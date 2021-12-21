const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controller = {
    index: (req, res) => {
        res.render(path.join(__dirname, '../views/index.ejs'));
    },
    services: (req, res) => {
        res.render(path.join(__dirname, '../views/services.ejs'));
    },
    design: (req, res) => {
        res.render(path.join(__dirname, '../views/design.ejs'));
    },
    admin: (req, res) => {
        res.render(path.join(__dirname, '../views/admin.ejs'));

    },
    adminWelcome: (req, res) => {
        res.send('hola admin '+ req.query.name);

    }

};



module.exports = controller;        