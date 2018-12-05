// doctor model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const DoctorSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
		unique:true
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
    doctorId: {
        type: String,
        required: true
    },
	accountCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Doctor = mongoose.model('doctor', DoctorSchema);
