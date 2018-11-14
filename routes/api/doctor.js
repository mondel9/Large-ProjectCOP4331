const express = require('express')
const router = express.Router();

// doctor model
const Doctor = require('../../models/doctor')

// @route GET api/doctor
// @desc get doctor
// @access currently public
router.get('/', (req, res) => {
    Doctor.find()
     .sort({lastName : 1})
     .then(doctor => res.json(doctor))
});

// @route POST api/doctor
// @desc create a post
// @access currently public
router.post('/', (req, res) => {
    const newDoctor = new Doctor({
        userId: req.body.userId,
        username: req.body.username,
        password: req.body.password, 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        doctorId: req.body.doctorId,
    });

    newDoctor.save().then(doctor => res.json(doctor));
});

// @route DELETE api/doctor/:id
// @desc delete a doctor to the void
// @access currently public
router
    .delete('/:id', (req, res) => {
        Doctor.findById(req.params.id)
         .then(doctor => doctor.remove().then(() => res.json({ success: true })))
         .catch(err => res.status(404).json({success: false}));
    });
    
// @route PUT api/doctor/:id
// @description Update a doctor's info
// @access 
router.put('/:id', (req, res) => {
    Doctor.findByIdAndUpdate(req.params.id, 
        { userId: req.body.userId,
          username: req.body.username,
          password: req.body.password, 
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          doctorId: req.body.doctorId,
        }, {new : true})
    .then(doctor => res.json(doctor))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;