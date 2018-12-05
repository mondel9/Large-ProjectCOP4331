//insurance info model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InsuranceSchema = new Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    groupNum: {
        type: String,
        required: true
    },
    identificationNum: {
        type: String,
        required: true
    },
    planType: {
        type: String,
        required: true
    },
    // co-pays
    office: {
        type: Number,
        required: true
    },
    RxGeneric: {
        type: Number,
        required: true
    },
    RxBrand: {
        type: Number,
        required: true
    },
    specialist: {
        type: Number,
        required: true
    },
    ER: {
        type: Number,
        required: true
    },
    dateEffective: {
        type: String,
        required: true
    }
});

module.exports = Insurance = mongoose.model('insurance', InsuranceSchema);
