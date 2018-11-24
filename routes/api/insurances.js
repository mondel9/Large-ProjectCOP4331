// insurance info api
const express = require('express');
const router = express.Router();

// insurance model
const Insurance = require('../../models/insurance');

// @route GET api/insurances/:id
// @description Get a patient's insurance info by patientid
router.get('/:id', (req, res) => {
    Insurance.find({patientId: req.params.id})
    .then(insurance => res.json(insurance))
});

// @route POST api/insurances/
// @description create a new insurance entry
router.post('/', (req, res) => {
    const newInsurance = new Insurance({
        patientId: req.body.patientId,
        provider: req.body.provider,
        groupNum: req.body.groupNum,
        identificationNum: req.body.identificationNum,
        planType: req.body.planType,
        office: req.body.office,
        RxGeneric: req.body.RxGeneric,
        RxBrand: req.body.RxBrand,
        specialist: req.body.specialist,
        ER: req.body.ER,
        dateEffective: req.body.dateEffective
    });

    newInsurance.save().then(insurance => res.json(insurance));
});

// @route PUT api/insurances/:id
// @description Update a patient's insurance info by patientid
router.put('/:id', (req, res) => {
    Insurance.findByIdAndUpdate(req.params.id, 
        {
            provider: req.body.provider,
            groupNum: req.body.groupNum,
            identificationNum: req.body.identificationNum,
            planType: req.body.planType,
            office: req.body.office,
            RxGeneric: req.body.RxGeneric,
            RxBrand: req.body.RxBrand,
            specialist: req.body.specialist,
            ER: req.body.ER,
            dateEffective: req.body.dateEffective
        }, {new: true})
    .then(insurance => res.json(insurance))
    .catch(err => res.status(404).json({ success: false }));
});

// @route DELETE api/insurances/:id
// @description Delete insurance entry by insurance id
router.delete('/:id', (req, res) => {
    Insurance.findById(req.params.id)
        .then(insurance => insurance.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })));
});

module.exports = router;