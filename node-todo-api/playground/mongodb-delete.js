// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database')
  }

  console.log('\nConnected to database\n===============\n')
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // Challenge
  db.collection('Users').deleteMany({name: 'Marcus Virginia'}).then((result) => {
    console.log(result)
  })
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b6f26a987d1473be45b06e2')}).then((result) => {
    console.log(result)
  })

  // console.log('\n\n===============\nClosing Database')
  // client.close()
})