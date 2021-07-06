const express = require('express');
const vehicleController = require('../controller/vehicleController');
const router = express.Router();

router.get('/', vehicleController.read);
router.post('/create', vehicleController.create);
router.get('/:id', vehicleController.readOne)
router.put('/edit/:id', vehicleController.editOne);
router.delete('/delete/:id', vehicleController.deleteOne)

module.exports = router;