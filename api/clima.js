const axios = require('axios')

const getClima = async (lat, lng) => {
    let r = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7b53a249f3f179c9a4fd947524ea30bd`)

    let clima = r.data.main

    return {
        temp: clima.temp,
        min: clima.temp_min,
        max: clima.temp_max
    }
}

module.exports = {
    getClima
}