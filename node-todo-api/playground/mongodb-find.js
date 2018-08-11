// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database')
  }

  console.log('\nConnected to database\n===============\n')
  const db = client.db('TodoApp')

  // db.collection('Todos').find({_id: new ObjectID('5b6f12e5d7fddd3be477c64e')}).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // })

  db.collection('Users').find({name: 'Marcus Virginia'}).count().then((count) => {
    console.log(`Users count: ${count}`)
  }).catch(err => { console.log('Unable to fetch Users', err) })


  // console.log('\n\n===============\nClosing Database')
  // client.close()
})