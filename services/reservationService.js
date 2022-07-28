const Reservation = require('../models/Reservation');

const getAllReservationsService = async () => {
    try {
        const reservationsDB = await Reservation.find({}).populate('client');
        
        return reservationsDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const getReservationByIdService = async (id) => {
    try {
        const reservationDB = await Reservation.findById( id );

        return reservationDB;

    } catch (error) {
        console.log(error);
        return null;
    } 
}

const createReservationService = async (data) => {
    const newReservation = new Reservation(data);
    try {
        const newReservationDB = await newReservation.save();
        
        return newReservationDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateReservationService = async (data, id) => {

    const updatedReservation = {
        ...data
    };

    try {
        const updatedReservationDB = await Reservation.findByIdAndUpdate( id, updatedReservation, { new: true } );

        return updatedReservationDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteReservationService = async (id) => {
    try {
        const deletedReservationDB = await Reservation.findByIdAndDelete( id );

        return deletedReservationDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    getAllReservationsService,
    getReservationByIdService,
    createReservationService,
    updateReservationService,
    deleteReservationService
}

