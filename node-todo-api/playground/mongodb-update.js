// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database')
  }

  console.log('\nConnected to database\n===============\n')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b6f255187d1473be45b06e1')}, { $set: {completed: true} }, { returnOriginal: false }).then((result) => {
  //   console.log(result)
  // })

  // Challenge
  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5b6f115c0c1b87182427acf7')}, { $set: {name: 'Marcus Virginia'}, $inc: {age: 1} }, { returnOriginal: false }).then((result) => {
    console.log(result)
  })


  // console.log('\n\n===============\nClosing Database')
  // client.close()
})