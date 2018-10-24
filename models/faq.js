// FAQ model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FAQSchema = new Schema({
    fillQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fillQuestion'
    }],
    dateUpdated: Date
});

module.exports = FAQ = mongoose.model('faq', FAQSchema);
