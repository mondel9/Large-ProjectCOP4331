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
    copay: {
        office: Number,
        RxGeneric: Number,
        RxBrand: Number,
        specialist: Number,
        required: true
    },
    dateEffective: {
        type: Date,
        required: true
    }
});

module.exports = Insurance = mongoose.model('insurance', InsuranceSchema);
