const mongoose = require('mongoose')
const app = require('./app')
const GlobalEnv = require('./GlobalEnv')

mongoose.connect(GlobalEnv.uri_database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        return console.log(`Error connecting to the database: ${err}`)
    }
    console.log('Connection to the established database ....')
    app.listen(GlobalEnv.port, () => {
        console.log(`Servidor web escuchando en ${GlobalEnv.host}:${GlobalEnv.port}`)
    })
})