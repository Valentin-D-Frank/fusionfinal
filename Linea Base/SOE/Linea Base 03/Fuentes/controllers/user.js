const Usuario = require('../models/Usuarios');
const bcrypt = require('bcrypt')
userOperation = function (req, res) {
    const command = req.body.command
    switch (command) {
        case 'REGISTER_USER':
            registerUser(req, res)
            break
        default:
            return res
                .status(500)
                .send({
                    status: 'ERROR',
                    message: 'No se ha encontrado la operación'
                })
    }
}

function registerUser(req, res) {
    const user = req.body.transaction
    const saltRounds = 10
    const newUsuario = new Usuario(user)
    bcrypt.hash(newUsuario.password, saltRounds).then((hash) => {
        newUsuario.save((err) => {
            if (err) {
                return res
                    .status(200)
                    .send({
                        status: 'FAILED',
                        message: err
                    })
            } else {
                return res
                    .status(200)
                    .send({
                        status: 'SUCCESS',
                        message: 'Usuario registrado correctamente'
                    })
            }
        })
            /*.then((res) => {
                return res
                    .status(200)
                    .send({
                        status: 'SUCCESS',
                        message: 'Usuario registrado correctamente'
                    })
            })
            .catch((err) => {
                return res
                    .status(200)
                    .send({
                        status: 'FAILED',
                        message: err
                    })

            })*/
    });
    
    
}
module.exports = userOperation