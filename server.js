const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const patients = require('./routes/api/patients');
const dependents = require('./routes/api/dependents');

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

// use the routes
app.use('/api/patients', patients);
app.use('/api/dependents', dependents);

// run the server; will be deployed on heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

