const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const patients = require('./routes/api/patients');
const dependents = require('./routes/api/dependents');
const admins = require('./routes/api/admins');
const doctor = require('./routes/api/doctor');
const appointments = require('./routes/api/appointments');
const facility = require('./routes/api/facility');
const prescriptions = require('./routes/api/prescriptions');

// initialize express
const app = express();

// body parser middleware
app.use(bodyParser.json());

// mongoDB configuration
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));

app.use(cors());

// use the routes
app.use('/api/patients', patients);
app.use('/api/dependents', dependents);
app.use('/api/admins', admins);
app.use('/api/doctor', doctor);
app.use('/api/appointments', appointments);
app.use('/api/facility', facility);
app.use('/api/prescriptions', prescriptions);

// run the server; will be deployed on heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

