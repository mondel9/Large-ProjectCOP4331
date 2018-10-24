// dependent model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DependentSchema = new Schema({
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    ss: {
        type: Number,
        required: true
    },
    insurance: {
        type: Boolean,
        required: true
    },
    guardian: {
        type: mongoose.Schema.Types.ObjectId
    },
    accountCreated: 
    {
        type: Date,
        default: Date.now
    }
});

module.exports = Dependent = mongoose.model('dependent', DependentSchema);
