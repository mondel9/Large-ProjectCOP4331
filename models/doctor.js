// doctor model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = Doctor = mongoose.model('doctor', DoctorSchema);
