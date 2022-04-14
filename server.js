const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 5001;

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/dadapp';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: false });

//Get the default connection
var db = mongoose.connection;

app.use(express.static('client/build'));
app.use(express.json()); // for parsing application/json
app.use(cors());

// Routers
const activitiesRouter = require('./routes/activities');

// Routes
app.use('/api/activities', activitiesRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));