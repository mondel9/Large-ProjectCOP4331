const express = require('express')
const router = express.Router();

// Appointments model
const Appointments = require('../../models/appointment')

// @route GET api/appointments
// @desc get all appointments
router.get('/', (req, res) => {
    Appointments.find()
    .sort({date : 1}) 
    .then(appointments => res.json(appointments))
});

router.get('/search:id', (req, res) => {
    Appointments.find({patient: req.params.id})
    .then(appointments => res.json(appointments))
});

// @route POST api/appointments
// @desc create a post
router.post('/', (req, res) => {
    const newAppointments = new Appointments({
        patient: req.body.patient,
        date: req.body.date,
        seenBy: req.body.seenBy,
        createdBy: req.body.createdBy,
        notes: req.body.notes,
        checkedIn: req.body.checkedIn,
        late: req.body.late
    });

    newAppointments.save().then(appointments => res.json(appointments));
});

// @route DELETE api/appointments/:id
// @desc delete a appointment to the void
router.delete('/:id', (req, res) => {
    Appointments.findById(req.params.id)
    .then(appointments => appointments.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({success: false}));
});
    
// @route PUT api/appointments/:id
// @description Update a appointments info
router.put('/:id', (req, res) => {
    Appointments.findByIdAndUpdate(req.params.id, 
        {  patient: req.body.patient,
           date: req.body.date,
           seenBy: req.body.seenBy,
           createdBy: req.body.createdBy,
           notes: req.body.notes,
           checkedIn: req.body.checkedIn,
           late: req.body.late
        }, {new : true})
    .then(appointments => res.json(appointments))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
