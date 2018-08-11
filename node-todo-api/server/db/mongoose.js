var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')
// db.on('error').then((err) => { console.log('Unable to connect to MongoDB', err)})
// db.once('open').then(() => { console.log('\nConnected!\n')})

module.exports = {mongoose}