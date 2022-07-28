const { check } = require('express-validator');
const { getAllReservations, createReservation, updateReservation, deleteReservation } = require('../controllers/reservationController');
const { isDateValidator } = require('../helpers/isDateValidator');
const { isValidStateReservation } = require('../helpers/isValidStateReservarion');
const { validateFields } = require('../middlewares/validateFields');

/* Reservation Routes /api/v1/reservations  */
const router = require('express').Router();

router.get('/', getAllReservations);
router.post('/', 
[
    check('code', 'Field code of the room is required').exists().not().isEmpty(),
    check('room', 'Field room or room description is required').exists().not().isEmpty(),
    check('start', 'Field start date is required').exists().custom( isDateValidator ),
    check('end', 'Field end date is required').exists().custom( isDateValidator ),
    check('state', 'Field state is required and the permited states PENDIENTE, PAGADO, ELEMINADO').exists().custom( isValidStateReservation ),
    check('client', 'Field client is required, please asociate a client to the reservation').exists().not().isEmpty(),
    validateFields
],
createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;