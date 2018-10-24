// Yes or No question model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YNQuestionSchema = new Schema({
    question: String,
    answer: Boolean
});

module.exports = YNQuestion = mongoose.model('ynQuestion', YNQuestionSchema);
