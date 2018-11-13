// prescription model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    Rx: {
        type: String,
        required: true
    },
    name: {
        type: String,                // name of medication
        required: true
    },
    quantity: {
        type: String,               // total prescribed
        required: true
    },
    dose: {
        type: String,               // ex: 400 mg; 20 mL etc..
        require: true
    },
    instructions: {
        type: String,               // ex: take once a day in morning
        required: true
    },
    details: {
        type: String,               // ex: small, round, white tablets.
        required: true
    },
    datePrescribed: {
        type: Date,
        required: true,
        default: Date.now
    },
    numRefills: {
        type: Number,
        required: true
    },
    refillDate: Date,
    expirationDate: {
        type: Date,
        required: true
    },
    prescribedTo: {
        type: mongoose.Schema.Types.ObjectId,   // patientid or dependentid
        required: true
    },
    prescribedBy: {
        type: mongoose.Schema.Types.ObjectId,   // doctorid
        required: true
    }
});

module.exports = Prescription = mongoose.model('prescription', PrescriptionSchema);
