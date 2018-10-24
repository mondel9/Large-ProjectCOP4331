// 'Ask your Doctor' model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AskDrSchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    question: String,
    dateAsked: Date,
    answer: String,
    answeredBy: mongoose.Schema.Types.ObjectId,
    dateAnswered: Date
});

module.exports = AskDr = mongoose.model('askDr', AskDrSchema);
