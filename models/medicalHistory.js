// medical history model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalHistorySchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    sex: String,
    height: String,
    weight: String, 
    heartDisease: String,
    highbPressure: String, 
    stroke: String,
    pacemaker: String,
    respiratoryDisease: String,
    siezures: String,
    anemia: String,
    liverDisease: String,
    kidneyDisease: String,
    diabetes: String,
    cancer: String,
    allergies: String,
    alcohol: String,
    smoke: String,
    complete: Boolean,
    dateUpdated: Date, 
    updatedBy: String       // a doctorid
});

module.exports = MedicalHistory = mongoose.model('medicalHistory', MedicalHistorySchema);
