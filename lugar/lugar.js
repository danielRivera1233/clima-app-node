const axios = require('axios');

const getLugarLatLng = async ( dir ) => {
    const encodeUrl = encodeURI( dir );

    console.log(encodeUrl);

    const axios = require('axios');

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=bf30dbd2caea89e58c29d3f0d7d39f99&q=Bogota&appid=bf30dbd2caea89e58c29d3f0d7d39f99`
    });

    const resp = await instance.get();
    if (!resp.data.coord) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}