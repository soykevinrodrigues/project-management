const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos, tieneRole, validarJWT} = require('../middlewares');
const {
    storiesGet,
    storiesPost,
    storiesPut,
    storiesDelete
} = require('../controllers/userstories');


const router = Router();

router.get('/', [
        validarJWT,
        tieneRole('CONSULTAR_USERSTORIES')
    ],
    storiesGet);

router.post('/', [
    validarJWT,
    tieneRole('MODIFICAR_USERSTORIES'),
], storiesPost);

router.put('/:id', [
    validarJWT,
    tieneRole('MODIFICAR_USERSTORIES'),
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], storiesPut)

router.delete('/:id', [
    validarJWT,
    tieneRole('MODIFICAR_USERSTORIES'),
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], storiesDelete);

module.exports = router;
