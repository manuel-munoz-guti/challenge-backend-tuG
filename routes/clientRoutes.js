/* Client Routes /api/v1/clients  */
const router = require('express').Router();
const { check } = require('express-validator');
const { getAllClients, createClient, updateClient, deleteClient } = require('../controllers/clientController');
const { isDateValidator } = require('../helpers/isDateValidator');
const { validateFields } = require('../middlewares/validateFields');

router.get('/', getAllClients);
router.post('/',
[
    check('email', 'Field email is required and valid').exists().not().isEmpty().isEmail(),
    check('name', 'Field name is required').exists().not().isEmpty(),
    check('lastname', 'Field lastname is required').exists().not().isEmpty(),
    check('nit', 'Field nit is required').exists().isNumeric(),
    check('razon', 'Field razon is required').exists().not().isEmpty(),
    validateFields
],
createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;