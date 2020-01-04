const mongoose = require('mongoose')
const DB_URL = require('./config').DB_URL


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


mongoose.connection.on('connected', function() {
    console.log('connect sus');

})
mongoose.connection.on('disconnected', function() {
    console.log('disconnect');

})
mongoose.connection.on('error', function() {
    console.log('connect fail', error);

})

module.exports = mongoose