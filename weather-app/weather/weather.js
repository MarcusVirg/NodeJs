const request = require('request')

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/040c03486cb55aba5559bc3a9fe6ccda/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                summary: body.currently.summary
            })
        } else {
            callback('Unable to connect to the DarkSky Server')
        }
    })
}

module.exports.getWeather = getWeather