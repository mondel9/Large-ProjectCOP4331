//insurance info model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InsuranceSchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    provider: String,
    groupNum: String,
    identificationNum: String,
    planType: String,
    copay: {
        office: Number,
        RxGeneric: Number,
        RxBrand: Number,
        specialist: Number
    },
    dateEffective: Date
});

module.exports = Insurance = mongoose.model('insurance', InsuranceSchema);
