// medical history api
const express = require('express');
const router = express.Router();

// medical history model
const MedicalHistory = require('../../models/medicalHistory');

// @route GET api/medicalHistory/:id
// @description Get a patient's medical history by patientid
router.get('/:id', (req, res) => {
    MedicalHistory.find({patientId: req.params.id})
    .then(medHistory => res.json(medHistory))
});

// @route POST api/medicalHistory/
// @descr create a new patient's med history
router.post('/', (req, res) => {
    const newMedHistory = new MedicalHistory({
        patientId: req.body.patientId,
        sex: req.body.sex,
        height: req.body.height,
        weight: req.body.weight, 
        heartDisease: req.body.heartDisease,
        highbPressure: req.body.highbPressure, 
        stroke: req.body.stroke,
        pacemaker: req.body.pacemaker,
        respiratoryDisease: req.body.respiratoryDisease,
        siezures: req.body.siezures,
        anemia: req.body.anemia,
        liverDisease: req.body.liverDisease,
        kidneyDisease: req.body.kidneyDisease,
        diabetes: req.body.diabetes,
        cancer: req.body.cancer,
        allergies: req.body.allergies,
        alcohol: req.body.alcohol,
        smoke: req.body.smoke,
        complete: req.body.complete,
        dateUpdated: req.body.dateUpdated, 
        updatedBy: req.body.updatedBy      
    });

    newMedHistory.save().then(medHistory => res.json(medHistory));
});

// @route PUT api/medicalHistory/:id
// @descr Update a patient's med history by medhistory _id field
router.put('/:id', (req, res) => {
    MedicalHistory.findByIdAndUpdate(req.params.id, 
        {
            sex: req.body.sex,
            height: req.body.height,
            weight: req.body.weight, 
            heartDisease: req.body.heartDisease,
            highbPressure: req.body.highbPressure, 
            stroke: req.body.stroke,
            pacemaker: req.body.pacemaker,
            respiratoryDisease: req.body.respiratoryDisease,
            siezures: req.body.siezures,
            anemia: req.body.anemia,
            liverDisease: req.body.liverDisease,
            kidneyDisease: req.body.kidneyDisease,
            diabetes: req.body.diabetes,
            cancer: req.body.cancer,
            allergies: req.body.allergies,
            alcohol: req.body.alcohol,
            smoke: req.body.smoke,
            complete: req.body.complete,
            dateUpdated: req.body.dateUpdated, 
            updatedBy: req.body.updatedBy
        }, {new: true})
    .then(medHistory => res.json(medHistory))
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/medicalHistory/:id
// @description Delete insurance entry by medhistory _id field
router.delete('/:id', (req, res) => {
    MedicalHistory.find(req.params.id)
        .then(medHistory => medHistory.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })));
});

module.exports = router;
