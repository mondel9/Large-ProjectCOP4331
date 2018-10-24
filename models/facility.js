// facility info model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number,
    email: String,
    fax: Number,
    patientId: mongoose.Schema.Types.ObjectId
});

module.exports  = Facility = mongoose.model('facility', FacilitySchema);
