const express = require('express');
const app = express();
require('../models/dbConfig');
const postsRoutes = require('../postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use('/', postsRoutes);

app.listen(3001, () => console.log('Server started: 3001'));