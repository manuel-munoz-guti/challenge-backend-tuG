
const isValidStateReservation = (value) => { // rest trae toda la informacion del body y la request y se lo pasamos al validador custom de express-validator
    
    const statesReservations = ['PENDIENTE', 'PAGADO', 'ELEMINADO'];

    if(!value) return false;

    if(statesReservations.includes(value)){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isValidStateReservation
}