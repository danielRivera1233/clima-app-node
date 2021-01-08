const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./yargs/yargs').argv;


// clima.getClima( 40.7143 , -74.006)
//     .then(
//         console.log
//     ).catch(
//         console.log
//     );

const getInfo = async ( direccion ) => {

    try {
        const coords  = await lugar.getLugarLatLng( direccion );
        console.log(coords);
        console.log(coords.lat);
        const temp = await clima.getClima( coords.lat , coords.lng);
        console.log(temp);
        return `El clima de ${direccion} es de ${temp}.`;
    }catch( err ) {
        console.log(`No se encontro clima para esta locacion ${ direccion }`);
    }
} 


getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
