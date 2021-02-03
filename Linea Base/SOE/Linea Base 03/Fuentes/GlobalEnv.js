module.exports = {
    app_name: 'SOE',
    uri_database: process.env.MONGODB_URI || 'mongodb://localhost/soe',
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 3000
}