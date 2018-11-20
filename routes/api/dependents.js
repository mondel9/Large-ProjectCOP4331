const express = require('express');
const router = express.Router();

// dependent model
const Dependent = require('../../models/dependent');
const Patient = require('../../models/patient');

// @route GET api/dependents/:id
// @description get all dependents by guardian id.
// @access add authentication
router.get('/:id', (req, res) => {
    Dependent.find({ guardian: req.params.id})
    .then(dependents => res.json(dependents))
});

// @route POST api/dependents/:id
// @description create a new dependent with guardian id
// @access add authentication
router.post('/:id', (req, res) => {
    const newDependent = new Dependent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        ss: req.body.ss,
        insurance: req.body.insurance,
        guardian: req.params.id
    });

    newDependent.save().then(dependent => res.json(dependent));
});

// @route PUT api/dependents/:id
// @description Update a patient's info
router.put('/:id', (req, res) => {
    Dependent.findByIdAndUpdate(req.params.id, 
        { 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            ss: req.body.ss,
            insurance: req.body.insurance,
            guardian: req.body.guardian
        }, {new : true})
    .then(dependent => res.json(dependent))
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/dependents/:id
// @description Delete a dependent by id
router.delete('/:id', (req, res) => {
    Dependent.findById(req.params.id)
        .then(dependent => dependent.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })));
});

module.exports = router;
