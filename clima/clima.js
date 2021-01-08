const axios = require('axios');

const getClima = async (lat , lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bf30dbd2caea89e58c29d3f0d7d39f99&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}