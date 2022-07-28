const { response } = require('express');
const { getAllReservationsService, createReservationService, getReservationByIdService, updateReservationService, deleteReservationService } = require('../services/reservationService');

const getAllReservations = async (req, res = response, next) => {
    
    const allReservations = await getAllReservationsService();

    if(allReservations) {
        return res.status(200).json({
            ok: true,
            msg: 'Get all the Reservations',
            reservations: allReservations
        })
    } else {
        return res.status(500).json({
            ok: false,
            msg: 'Sothing error getting all the Reservations'
        })
    }
}

const createReservation = async (req, res = response, next) => {
    const {body} = req;

    const newReservation = await createReservationService(body);
    
    if(newReservation){
        return res.status(200).json({
            ok: true,
            msg: 'Reservation created sucsess',
            reservation: newReservation
        });
    } else {
        return res.status(500).json({
            ok: false,
            msg: 'Internal Server Error'
        });
    }
}

const updateReservation = async (req, res = response, next) => {
    const { id } = req.params;
    const { body } = req;

    const reservationSelected = await getReservationByIdService(id);

    if(!reservationSelected){
        return res.status(404).json({
            ok: false,
            msg: 'There is no Reservation with that ID'
        });
    }

    const updatedReservation = await updateReservationService(body, id);

    if(updatedReservation){
        return res.status(200).json({
            ok: true,
            msg: 'Reservation Updated',
            Reservation: updatedReservation
        });
    } else {
        return res.status(500).json({
            ok: true,
            msg: 'Internal Server Error'
        });
    }
}

const deleteReservation = async (req, res = response, next) => {
    const { id } = req.params;

    const reservationSelected = await getReservationByIdService(id);

    if(!reservationSelected){
        return res.status(404).json({
            ok: false,
            msg: 'There is no Reservation with that ID'
        });
    }

    const deletedReservation = await deleteReservationService(id);

    if(deletedReservation){
        return res.status(200).json({
            ok: true,
            msg: 'Reservation deleted',
            Reservation: deletedReservation
        });
    } else {
        return res.status(500).json({
            ok: true,
            msg: 'Internal Server Error'
        });
    }
}

module.exports = {
    getAllReservations,
    createReservation,
    updateReservation,
    deleteReservation
}