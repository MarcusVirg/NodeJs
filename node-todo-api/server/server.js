var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => { res.send(doc) }).catch((err) => { res.status(400).send(err) })
})

app.get('/todos', (req, res) => {})

app.get('/todos/{id}', (req, res) => {})

app.listen(3000, () => {
  console.log('\nServer started on port 3000\n')
})