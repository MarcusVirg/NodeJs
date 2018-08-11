// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database')
  }

  console.log('Connected to database')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Todo Item 1',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Marcus Virginia',
  //   age: 21,
  //   location: 'Minneapolis, MN'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err)
  //   }

  //   console.log(result.ops[0]._id.getTimestamp())
  // })

  client.close()
})