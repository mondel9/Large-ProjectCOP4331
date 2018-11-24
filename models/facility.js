// facility info model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type:String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fax: {
        type: Number,
        required: true
    },
    patientId: mongoose.Schema.Types.ObjectId
});

module.exports  = Facility = mongoose.model('facility', FacilitySchema);
