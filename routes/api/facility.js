const express = require('express')
const router = express.Router();

// Facility model
const Facility = require('../../models/facility')
//id stuff can be replaced by seen by
// @route GET api/facility
// @desc get facility
// @access currently public
router.get('/', (req, res) => {
    Facility.find()
     .sort({name : 1})
     .then(facility => res.json(facility))
});

// @route POST api/facility
// @desc create a post
// @access currently public
router.post('/', (req, res) => {
    const newFacility = new Facility({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone,
        email: req.body.email,
        fax: req.body.fax,
        patientId: req.body.patientId,
    });

    newFacility.save().then(facility => res.json(facility));
});

// @route DELETE api/facility/:id
// @desc delete a facility to the void
// @access currently public
router
    .delete('/:id', (req, res) => {
        Facility.findById(req.params.id)
         .then(facility => facility.remove().then(() => res.json({ success: true })))
         .catch(err => res.status(404).json({success: false}));
    });
    
// @route PUT api/facility/:id
// @description Update a facility info
// @access 
router.put('/:id', (req, res) => {
    Facility.findByIdAndUpdate(req.params.id, 
        {  name: req.body.name,
           address: req.body.address,
           city: req.body.city,
           state: req.body.state,
           zip: req.body.zip,
           phone: req.body.phone,
           email: req.body.email,
           fax: req.body.fax,
           patientId: req.body.patientId,
        }, {new : true})
    .then(facility => res.json(applicationCache))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;