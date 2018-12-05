// precription api
const express = require('express');
const router = express.Router();

// prescription model
const Prescription = require('../../models/prescription');

// @route GET api/prescriptions
// @description Get all patients
// @access public for now, need to add authentication ***
router.get('/', (req, res) => {
    Prescription.find()
    .then(patients => res.json(patients))
});

// @route GET api/prescriptions/byDoctor:id
// @description get all prescriptions by doctor id (who prescribed them)
// @access add authentication
router.get('/byDoctor:id', (req, res) => {
    Prescription.find({ prescribedBy: req.params.id})
    .then(prescriptions => res.json(prescriptions))
});

// @route GET api/prescriptions/:id
// @description get all prescriptions by patient id.
// @access add authentication
router.get('/byPatient:id', (req, res) => {
    Prescription.find({ prescribedTo: req.params.id})
    .then(prescriptions => res.json(prescriptions))
});

// @route POST api/prescriptions/
// @description create a new prescription
// @access add authentication
router.post('/', (req, res) => {
    const newPrescription = new Prescription({
        Rx: req.body.Rx,
        name: req.body.name,
        quantity: req.body.quantity,
        dose: req.body.dose,
        instructions: req.body.instructions,
        details: req.body.details,
        datePrescribed: req.body.datePrescribed,
        numRefills: req.body.numRefills,
        refillDate: req.body.refillDate,
        expirationDate: req.body.expirationDate,
        prescribedTo: req.body.prescribedTo,
        prescribedBy: req.body.prescribedBy
    });

    newPrescription.save().then(prescription => res.json(prescription));
});

// @route PUT api/prescriptions/:id
// @description Update a patient's prescription by prescriptionid
// @access
router.put('/:id', (req, res) => {
    Prescription.findByIdAndUpdate(req.params.id,
        {   Rx: req.body.Rx,
            name: req.body.name,
            quantity: req.body.quantity,
            dose: req.body.dose,
            instructions: req.body.instructions,
            details: req.body.details,
            //datePrescribed: req.body.datePrescribed,
            numRefills: req.body.numRefills,
            refillDate: req.body.refillDate,
            expirationDate: req.body.expirationDate,
            //prescribedTo: req.body.prescribedTo,
            //prescribedBy: req.body.prescribedBy
        }, {new : true})
    .then(prescription => res.json(prescription))
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/prescriptions/:id
// @description Delete a prescription by prescriptionid
// @access public for now, need to add authentication ***
router.delete('/:id', (req, res) => {
    Prescription.findById(req.params.id)
        .then(prescription => prescription.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })));
});

module.exports = router;
