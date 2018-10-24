// medical history model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalHistorySchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    ynQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ynQuestion'
    }],
    fillQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fillQuestion'
    }],
    complete: Boolean,
    dateUpdated: Date
});

module.exports = MedicalHistory = mongoose.model('medicalHistory', MedicalHistorySchema);
