require('../models/User')

const mongoose = require('mongoose');
const keys = require('../config/keys')
jest.setTimeout(600000)
mongoose.connect(keys.mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() =>console.log('Connect successful'))