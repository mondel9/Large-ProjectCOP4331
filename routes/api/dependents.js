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
// adds dependents but doesn't update the guardian document. ********
    newDependent.save()
   // .then(Patient.findByIdAndUpdate(req.params.id, 
     //   {dependents: true},
      //  {$addToSet: {dependents: [newDependent.id]}},
        //{new : true}))
    .then(dependent => res.json(dependent));
});

module.exports = router;
