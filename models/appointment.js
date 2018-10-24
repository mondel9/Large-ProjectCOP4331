// appointment model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patient: mongoose.Schema.Types.ObjectId,
    date: Date,
    seenBy: mongoose.Schema.Types.ObjectId,
    createdBy: mongoose.Schema.Types.ObjectId,
    notes: String,
    checkedIn: Boolean,
    late: Boolean
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);
