// prescription model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    Rx: String,
    name: String,
    quantity: Number,
    instructions: String,
    details: String,
    datePrescribed: Date,
    refillDate: Date,
    expirationDate: Date,
    prescribedTo: mongoose.Schema.Types.ObjectId,
    prescribedBy: mongoose.Schema.Types.ObjectId
});

module.exports = Prescription = mongoose.model('prescription', PrescriptionSchema);
