const axios = require('axios')

const getLugarLatLng = async direccion => {
    let encode = encodeURI(direccion)

    let r = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encode}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (r.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección ${direccion}`)
    }

    let location = r.data.results[0]
    let coors = location.geometry.location

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}