const moment = require('moment');

const isDateValidator = (value, rest) => { // rest trae toda la informacion del body y la request y se lo pasamos al validador custom de express-validator
    
    if(!value) return false;

    const fecha = moment( value );
    if(fecha.isValid()) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isDateValidator
}