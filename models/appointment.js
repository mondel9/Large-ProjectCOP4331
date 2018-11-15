// appointment model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patient: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        required: true
    },
    seenBy: mongoose.Schema.Types.ObjectId,
    createdBy: mongoose.Schema.Types.ObjectId,
    notes: {
        type: String
    },
    checkedIn: {
        type: Boolean,
        required: true
    },
    late: {
        type: Boolean
    }
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);
