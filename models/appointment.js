// appointment model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patient: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        required: true
    },
    seenBy: String,     //doctorId from doctor model
    createdBy: mongoose.Schema.Types.ObjectId,      // an admin _id
    notes: String,      // reason for vist
    checkedIn: {       
        type: Boolean,
        default: false
    },
    late: {
        type: Boolean,
        default: false
    }
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema);
