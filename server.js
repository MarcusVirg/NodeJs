const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use((req, res, next) => {
    var now = new Date().toString()
    var log = `${now}: ${req.method} ${req.url}`

    console.log(log)
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to create server file')
        }
    })
    next()
})

app.use((req, res, next) => {
    res.render('maintenance.hbs')
})

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        welcomeMessage: 'Hello There!'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        welcomeMessage: 'Hello there!'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to fulfill this request'
    })
})

app.listen(3000)