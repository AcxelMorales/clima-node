const argv = require('./config/yargs').argv
const site = require('./api/locacion')
const clima = require('./api/clima')

let getInfo = async direccion => {
    try {
        let cords = await site.getLugarLatLng(direccion)
        let temp = await clima.getClima(cords.lat, cords.lng)

        return `El clima en ${cords.direccion} es de: ${temp.temp}°C\nTemperatura minima: ${temp.min}°C\nTemperatura maxima: ${temp.max}°C`
    } catch (error) {
        return `No se pudo obtener el clima de la ciudad: ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))