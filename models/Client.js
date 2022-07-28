const {Schema, model} = require('mongoose'); 

const ClientSchema = Schema({
    email: {  // Using the email as a code
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    nit: {
        type: Number,
        default: 0
    },
    razon: {
        type: String,
        default: 'SN'
    },
    phone: {
        type: String
    }
});

module.exports = model('Client', ClientSchema);