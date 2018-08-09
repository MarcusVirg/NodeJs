const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

    var encodedAddress = encodeURIComponent(argv.a)
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBieAq4k1Suq5HBFGnoeSj7q0bruqySChQ`

    axios.get(geocodeUrl).then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.')
        }
        
        var lat = response.data.results[0].geometry.location.lat
        var lng  = response.data.results[0].geometry.location.lng
        var weatherUrl = `https://api.darksky.net/forecast/040c03486cb55aba5559bc3a9fe6ccda/${lat},${lng}`
        console.log(response.data.results[0].formatted_address)
        return axios.get(weatherUrl)
    }).then((response) => {
        var temperature = response.data.currently.temperature
        var apparentTemperature = response.data.currently.apparentTemperature
        var summary = response.data.currently.summary
        console.log(`It is currently ${temperature}\nIt feels like ${apparentTemperature}\nSummary: ${summary}`)
    }).catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to Google Server.')
        } else {
            console.log(e.message)
        }
    })