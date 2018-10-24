// Short answer question model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FillQuestionSchema = new Schema({
    question: String,
    answer: String
});

module.exports = FillQuestion = mongoose.model('fillQuestion', FillQuestionSchema);
