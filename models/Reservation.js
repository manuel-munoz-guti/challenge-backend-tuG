const {Schema, model} = require('mongoose');

const ReservationSchema = Schema({
    code: { // Reservation starts with the code of the room
        type: String,
        required: true
    },
    room: { // Description of the room
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }
});

module.exports = model('Reservation', ReservationSchema); 