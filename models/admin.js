// admin model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const AdminSchema = new Schema({
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
	    accountCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Admin = mongoose.model('admin', AdminSchema);
