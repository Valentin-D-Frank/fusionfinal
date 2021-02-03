const Uc = require("../models/usercurso");
const dbConnection = require("../connect");
const connection = dbConnection();

userOperation = function(req, res) {
    const command = req.body.command;
    switch (command) {
        case "ADD_USER":
            addUser(req, res);
            break;
        default:
            return res.status(500).send({
                status: "ERROR",
                message: "No se ha encontrado la operación",
            });
    }
};

async function addUser(req, res) {
    const user = req.body.transaction;
    await connection.query('SELECT id FROM usuario WHERE email = ?', [user.email], (err, result) => {
        if (err != null) {
        } else {
            if (result == '') {
            } else {
                connection.query('INSERT INTO usuario_curso values (?,?)', [result[0].id, user.id], (err2, result2) => {
                    if (err2 != null) {
                    } else {
                        if (result2 == '') {
                        } else {
                        }
                    }
                })
            }
        }
    })
}


module.exports = userOperation;