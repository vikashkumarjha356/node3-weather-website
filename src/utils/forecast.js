const request = require('request');

const foreCast = (lat, long , callback) => {
    const url = `http://api.weatherstack.com/current?access_key=536d15d9871925266e22037adf7be0b5&query=${lat},${long}&unit=m`;
    request({ url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect',undefined)
        }

        else if(body.error){
            callback('Unable to find c0-ordinates',undefined)
        }

        else{
            // console.log(body.current);
            callback(undefined, body.current.weather_descriptions[0]
                + ". It is currently " + body.current.temperature +" degrees out. It feels like " +body.current.feelslike+" degrees. The humidity is" + body.current.humidity )
        }
     })
}



module.exports = foreCast