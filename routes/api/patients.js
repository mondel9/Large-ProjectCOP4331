// patient api
const express = require('express');
const router = express.Router();

// patient model
const Patient = require('../../models/patient');

// @route GET api/patients
// @description Get all patients
// @access public for now, need to add authentication ***
router.get('/', (req, res) => {
    Patient.find()
    .sort({lastName : 1})
    .then(patients => res.json(patients))
});

// @route GET api/patients/search:lastName&:dob **
// @description get patients with the given last name and d.o.b
// @access 
router.get('/search:lastName&:dob', (req, res) => {
    Patient.find({lastName: req.params.lastName, dob: req.params.dob})
    .then(patients => res.json(patients))
});

// @route POST api/patients
// @description Create new patient
// @access public for now, need to add authentication, password requirements ***
router.post('/', (req, res) => {
    const newPatient = new Patient({
        username: req.body.username,
        password: req.body.password, 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        ss: req.body.ss,
        dependents: req.body.dependents,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        insurance: req.body.insurance
    });
    
    newPatient.save().then(patient => res.json(patient));
});

// @route PUT api/patients/:id
// @description Update a patient's info
// @access 
router.put('/:id', (req, res) => {
    Patient.findByIdAndUpdate(req.params.id, 
        { username: req.body.username,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dob: req.body.dob,
          ss: req.body.ss,
          dependents: req.body.dependents, 
          email : req.body.email,
          address: req.body.address,
          phone : req.body.phone,
          insurance: req.body.insurance
        }, {new : true})
    .then(patient => res.json(patient))
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/patients/:id
// @description Delete a patient
// @access public for now, need to add authentication ***
router.delete('/:id', (req, res) => {
    Patient.findById(req.params.id)
        .then(patient => patient.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })));
});

module.exports = router;