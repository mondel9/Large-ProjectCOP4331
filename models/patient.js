//patient model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: Date,
    ss: Number,
    dependents: Boolean,
    //[{
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'dependent',
        //default: null
    //}],
    email: String,
    phone: {
        type: String,
        required: true
    },
    address: String,
    insurance: {
        type: Boolean,
        required: true
    },
    accountCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Patient = mongoose.model('patient', PatientSchema);
